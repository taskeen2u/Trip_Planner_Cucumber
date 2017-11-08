package tripRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
			    features = {"src\\test\\resources\\tripOutline\\TripFeature.feature"},
                plugin = {"pretty", "html:target\\cucumber","json:target/TripPlannerStepDef.json"},
                tags = "@smokeTest",
                glue = {"tripPackage"})


public class TripPlannerTestRunner {
}
