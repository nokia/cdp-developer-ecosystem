# NXP LPC1768 Onboarding 

### Prerequisites
- Access to a Linux terminal
- GCC ARM Embedded toolchain, which can be installed by following the guide [here](https://launchpad.net/gcc-arm-embedded)

### Procedure
1. Log in to the CDP console and select "Devices", then click "Add Device".
2. For the device ID, provide a unique name for your device Ex. "LPC1768". Keep track of this value as it will be useful in later steps.
3. Clone the client code GitHub repo from [here](https://github.com/sbernard31/wakaama-mbed-application-board)
4. Open up a terminal window and navigate to the directory containing the downloaded file.
5. Use the following commands to compile the client code:
~~~~
make clean
make ENDPOINT_NAME=<YOUR_DEVICEID_HERE> SERVER_URI=coap://<YOUR_CDP_SERVERIP_HERE>:5683
~~~~
6. Plug in your LPC1768 board to the computer and copy the generated .bin file to the root of the mbed device. 
7. When the copy is finished, plug in an Ethernet cable and press reset to run the client.
