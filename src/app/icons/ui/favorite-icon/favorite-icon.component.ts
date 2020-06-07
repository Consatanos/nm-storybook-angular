import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "favorite-icon",
    templateUrl: "./favorite-icon.component.html",
    styleUrls: ["./favorite-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
