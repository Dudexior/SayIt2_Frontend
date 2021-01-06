import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { Flashcard } from '../../models/flashcard';
import { FlashcardChangeDirection } from '../../models/flashcard-change-direction.enum';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  templateUrl: './flashcards-page.component.html',
  styleUrls: ['./flashcards-page.component.scss']
})
export class FlashcardsPageComponent implements OnInit {

  initLoading: boolean;
  subscriptions: Subscription[] = [];
  flashcards: Flashcard[] = [];
  selectedFlashcard: Flashcard;
  selectedIndex = 0;
  maxIndex = 0;

  swipperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
  }

  @ViewChild('swiper', { static: false }) swiper;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.initLoading = true;
    this.subscriptions.push(this.downloadFlashcards(true));
  }

  flashcardChangeHandler(direction: FlashcardChangeDirection) {
    const modifier = (direction === FlashcardChangeDirection.next ? 1 : -1);

    this.selectedIndex += modifier;
  }

  private downloadFlashcards(initDownload: boolean = false): Subscription {
    return this.flashcardService.getAllFlashcards().subscribe(res => {
      this.flashcards = res;
      this.initLoading = false;

      if (initDownload) {
        this.selectedIndex = 0;
        this.selectedFlashcard = this.flashcards[0];
        this.maxIndex = res.length;
      }

    }, err => { this.initLoading = false; });
  }
}
