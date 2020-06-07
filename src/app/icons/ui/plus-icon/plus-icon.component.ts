import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "plus-icon",
    templateUrl: "./plus-icon.component.html",
    styleUrls: ["./plus-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlusIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
