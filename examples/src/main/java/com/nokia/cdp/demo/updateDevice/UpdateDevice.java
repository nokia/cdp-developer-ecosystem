/* Nokia Connected Device Platform NBI API Demos
 * 
 * PUT: /rest/device/{id}
 * 
 * Description: This URI will allow you to update values associated to the device ID. The API
 * returns an empty response body for a successful PUT. The status codes correspond to the following
 * values:
 * 
 * 200 - OK - Successfully modified the specified device
 * 500 - Internal Server Error - Malformed JSON payload, device not found, etc.
 * 
 * @author Oliver Upton
 * 
 */
package com.nokia.cdp.demo.updateDevice;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Scanner;

import org.apache.commons.io.FileUtils;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.Credentials;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.nokia.cdp.demo.addDevice.AddDevice;

public class UpdateDevice {
public static void main(String[] args) {
		
		//TODO: Implement POST JSON Schema
		
		// First, we will allow the user to provide CDP server parameters
		System.out.println("Please provide the CDP IP address: ");
		Scanner s = new Scanner(System.in);
		String ipAddr = s.nextLine();
		System.out.println("Please provide the CDP HTTP Port (If unchanged enter 80): ");
		String port = s.nextLine();
		System.out.println("Please provide the numeric Device ID: ");
		String id = s.nextLine();
		System.out.println("Username: ");
		String uname = s.nextLine();
		System.out.println("Password: ");
		String pw = s.nextLine();
		
		// Then, we will build the URL based on the input and create a new PUT method
		HttpPut updateDevice = new HttpPut("http://" + ipAddr + ":" + port + "/rest/device/" + id);
		updateDevice.setHeader("Content-Type", "application/json");
		
		// Read the json schema from the classpath
		URL url = UpdateDevice.class.getResource("schema.json");
		try {
			updateDevice.setEntity(new ByteArrayEntity(FileUtils.readFileToByteArray(new File(url.getPath()))));
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			System.exit(-1);
		}
		
		// Configure the Credentials
		Credentials creds = new UsernamePasswordCredentials(uname, pw);
		CredentialsProvider prov = new BasicCredentialsProvider();
		prov.setCredentials(AuthScope.ANY, creds);
				
		// Build the HttpClient that will tender our HTTP PUT method
		HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(prov).build();
		HttpResponse list = null;
		try {
					
			// Execute the PUT method
			list = client.execute(updateDevice);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		if(list != null) {
					
			// Print out the Response from CDP into the console
			System.out.println("HTTP STATUS CODE:" + list.getStatusLine().getStatusCode());
			System.out.println("========== BEGIN HTTP RESPONSE BODY============");
			try {
				System.out.println(EntityUtils.toString(list.getEntity()));
			} catch (ParseException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			System.out.println("========== END HTTP RESPONSE BODY============");
		}
	s.close();
	}
}
