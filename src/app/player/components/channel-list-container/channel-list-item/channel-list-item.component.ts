import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-channel-list-item',
    styleUrls: ['./channel-list-item.component.scss'],
    template: `<mat-list-item
        [class.active]="selected"
        (click)="clicked.emit()"
        data-test-id="channel-item"
    >
        <div class="channel-logo" *ngIf="logo">
            <img [src]="logo" width="48" onerror="this.style.display='none'" />
        </div>
        <p matLine class="channel-name">
            {{ name }}
        </p>
        <button
            *ngIf="showFavoriteButton"
            mat-icon-button
            color="primary"
            [matTooltip]="'CHANNELS.REMOVE_FAVORITE' | translate"
            (click)="favoriteToggled.emit($event)"
        >
            <mat-icon color="accent">star</mat-icon>
        </button>
        <mat-divider></mat-divider
    ></mat-list-item>`,
})
export class ChannelListItemComponent {
    @Input() logo!: string;
    @Input() name = '';
    @Input() showFavoriteButton = false;
    @Input() selected = false;

    @Output() clicked = new EventEmitter<void>();
    @Output() favoriteToggled = new EventEmitter();
}
