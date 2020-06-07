import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "question-icon",
    templateUrl: "./question-icon.component.html",
    styleUrls: ["./question-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
