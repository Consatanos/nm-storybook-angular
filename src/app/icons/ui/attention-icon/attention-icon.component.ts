import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "attention-icon",
    templateUrl: "./attention-icon.component.html",
    styleUrls: ["./attention-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttentionIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
