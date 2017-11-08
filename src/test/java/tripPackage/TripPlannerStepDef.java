package tripPackage;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TripPlannerStepDef {

	public WebDriver driver;
	
	@Given("^Phileas is planning a trip$")
	public void phileas_is_planning_a_trip() throws Throwable {
	   
		driver = new ChromeDriver();
		driver.get("https://transportnsw.info/trip#/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
		
	@When("^he executes a trip plan from \"([^\"]*)\" to \"([^\"]*)\"$")
	public void he_executes_a_trip_plan_from_to(String src, String dest) throws Throwable {
	    
		 //Select Source 
		 driver.findElement(By.id("search-input-From")).sendKeys(src);
		 WebDriverWait wait1 = new WebDriverWait(driver,20);
		 WebElement ele1 = wait1.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#suggestion-"+ "From" +"-0")));
		
		 //Select Destination  
	     driver.findElement(By.id("search-input-To")).sendKeys(dest);
	     WebDriverWait wait2 = new WebDriverWait(driver,20);
	 	 WebElement ele2 = wait2.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#suggestion-"+ "To" +"-0")));
	     
	 	 //Click Go Button	      
	     driver.findElement(By.id("search-button")).click();
	}
	

	@Then("^a list of trips should be provided$")
	public void a_list_of_trips_should_be_provided() throws Throwable {
	    
		//Check trips list 
		List<WebElement> tripsList = driver.findElements(By.cssSelector(".row"));  
			        
		int trips = tripsList.size();
		if (trips>0){
		   	Assert.assertTrue(trips>0,"Trips returned is more than 1");
		    }
		else
		 	{
		  Assert.assertFalse(trips==0, "No trips returned");
			}
		driver.quit();	
	    }

	
}
	



