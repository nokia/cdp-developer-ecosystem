# Bosch XDK Onboarding

### Prerequisites
- [Bosch XDK Workbench](https://xdk.bosch-connectivity.com/software)
- A Micro SD Card

### Procedure
1. Log in to the CDP console and select "Devices", then click "Add Device".
2. For the device ID, provide a unique name for your device Ex. "BoschXDK". Keep track of this value as it will be useful in later steps.
3. Open XDK Workbench, and at the welcome screen click "Lwm2mSensorClient". 
4. Plug in your Bosch device. Once the project opens, click "Flash" in the upper left corner.
5. Open the provided txt file from this repo in a Text Editor.
6. Configure the values of "SSID" and "Password" for your WiFi.
7. Then, edit the "LWM2MENDPOINT" field to reflect the Device ID you entered in CDP, and the "LWM2MDEFSRV" field to reflect the server's address in this format: coap://<YOUR_SERVER_IP_ADDRESS>:5683
8. Save the config file to a Micro SD card and insert it in the XDK. Plug the device into power and switch on. Your device should now be connected to CDP.
