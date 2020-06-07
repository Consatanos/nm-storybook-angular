import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "question-mark-icon",
    templateUrl: "./question-mark-icon.component.html",
    styleUrls: ["./question-mark-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionMarkIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
