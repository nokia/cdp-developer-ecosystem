# Raspberry Pi Leshan Client

### Prerequisites
- Java Runtime (1.7 or greater)
- Access to Java command line tool
- SSH access (If running remotely)

### Procedure
1. Log in to the CDP console and select "Devices", then click "Add Device".
2. For the device ID, provide a unique name for your device Ex. "RasPi". Keep track of this value as it will be useful in later steps.
3. Download the Eclipse Leshan demo client from [here](https://search.maven.org/remotecontent?filepath=org/eclipse/leshan/leshan-client-demo/1.0.0-M1/leshan-client-demo-1.0.0-M1-jar-with-dependencies.jar)
4. Open up a terminal window and navigate to the directory containing the downloaded file.
5. Use the following command to run the client, replacing the correct ones for your setup:
~~~~
java -jar leshan-client-demo-*-jar-with-dependencies.jar -n YOUR_DEVICEID_HERE - u YOUR_CDP_IP_ADDRESS:5683
~~~~
