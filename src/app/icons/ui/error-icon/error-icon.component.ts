import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "error-icon",
    templateUrl: "./error-icon.component.html",
    styleUrls: ["./error-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
