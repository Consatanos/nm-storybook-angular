import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "info-letter-icon",
    templateUrl: "./info-letter-icon.component.html",
    styleUrls: ["./info-letter-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoLetterIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
