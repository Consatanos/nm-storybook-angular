import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "lock-icon",
    templateUrl: "./lock-icon.component.html",
    styleUrls: ["./lock-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LockIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
