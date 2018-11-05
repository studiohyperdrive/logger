import { Component, OnInit } from "@angular/core";
import { logger, productionLogger } from "./logger";

@Component({
	selector: "app",
	templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {
	public ngOnInit(): void {
		logger.debug("some debug message", { key: "value" });
		logger.info("some info message", { key: "value" });
		logger.success("some success message", { key: "value" });
		logger.warn("some warning message ", { key: "value" });
		logger.error("some error message", { key: "value" });

		productionLogger.debug("some production debug message", new Error("something broke"));
		productionLogger.debug("some forced production debug message", new Error("something broke"), true);
		productionLogger.error("some production error message", new Error("something broke"));
	}
}
