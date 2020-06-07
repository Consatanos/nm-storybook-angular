import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "success-icon",
    templateUrl: "./success-icon.component.html",
    styleUrls: ["./success-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
