import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Quiz } from '../../models/quiz';
import { QuizQuestionComplex } from '../../models/quiz-question-complex';
import { QuizService } from '../../services/quiz.service';

@Component({
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit, OnDestroy {

  quiz: Quiz;
  answersObservable$: Observable<(boolean | null)[]>;
  questionSubscription: Subscription;

  selectedQuestion: QuizQuestionComplex;

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.extractDataFromUrl();
  }

  private extractDataFromUrl() {
    this.route.queryParams.subscribe(params => {
      if (params.category) {
        this.downloadQuiz(params.category);
      } else {
        console.error('brak kategorii w URL');
        this.router.navigate(['categories']);
      }
    });
  }

  private downloadQuiz(categoryId: number) {
    this.quizService.getQuizForCategory(categoryId).subscribe(questions => {
      this.quiz = new Quiz(questions);
      this.answersObservable$ = this.quiz.answers$

      this.questionSubscription = this.quiz.actualQuestion$.subscribe(question => {
        this.selectedQuestion = question;
      });
    });
  }


  ngOnDestroy() {
    this.quiz.closeSubscriptions();

    if (this.questionSubscription) {
      this.questionSubscription.unsubscribe();
    }
  }

}
