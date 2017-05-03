/* Nokia Connected Device Platform NBI API Demos
 * 
 * DELETE: /rest/device/{id}
 * 
 * Description: This URI allows you to delete a device based on ID from CDP server.
 *  This main method will read values from the keyboard for the for the corresponding parameters
 *  necessary to communicate with CDP.
 * 
 * @author Oliver Upton
 * 
 */


package com.nokia.cdp.demo.deleteDevice;

import java.io.IOException;
import java.util.Scanner;

import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.Credentials;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;

public class DeleteDevice {

	
public static void main(String[] args) {
		
		// First, we will allow the user to provide CDP server parameters
		System.out.println("Please provide the Device ID (numeric) that you would like to delete:");
		Scanner s = new Scanner(System.in);
		String device = s.nextLine();
		System.out.println("Please provide the CDP IP address: ");
		String ipAddr = s.nextLine();
		System.out.println("Please provide the CDP HTTP Port (If unchanged enter 80): ");
		String port = s.nextLine();
		System.out.println("Username: ");
		String uname = s.nextLine();
		System.out.println("Password: ");
		String pw = s.nextLine();
		
		// Then, we will build the URL based on the input and create a new DELETE method
		String url = "http://" + ipAddr + ":" + port + "/rest/device/" + device;
		System.out.println("Sending HTTP DELETE request to: " + url);
		HttpDelete deleteDevice = new HttpDelete(url);
		
		// Configure the Credentials
		Credentials creds = new UsernamePasswordCredentials(uname, pw);
		CredentialsProvider prov = new BasicCredentialsProvider();
		prov.setCredentials(AuthScope.ANY, creds);
		
		// Build the HttpClient that will tender our HTTP GET method
		HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(prov).build();
		HttpResponse list = null;
		try {
			
			// Execute the DELETE method
			list = client.execute(deleteDevice);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		if(list != null) {
			
			// Print out the Response from CDP into the console
			System.out.println("HTTP STATUS CODE:" + list.getStatusLine().getStatusCode());
			if(list.getStatusLine().getStatusCode() == 204) { // Successfully deleted if 204
				System.out.println("Successfully deleted device " + device + " from server " + ipAddr);
			}
		}
		s.close();
	}
}
