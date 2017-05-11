# Device Onboarding Guide

## Starter Kit Devices

To help you get started, we have provided Starter Kit Guides for the following devices:

- Raspberry Pi
- Bosch XDK 110
- NXP FRDM-K64F
- NXP LPC1768

To onboard one of these devices, navigate to the respective subfolder for the device and follow the included guide.

## Other LWM2M Devices

If you are onboarding a device that is not listed above, then follow this general guide for connecting the device to CDP.

1. Configure CDP for the device. Navigate to the 'Devices' menu, and select 'Add Device'. In the field for Device ID, provide your device a uniquely-identifiable name, like *MyFirstDevice*. Set the manufacturer as 'Generic' and the model as 'Generic LWM2M Device.

2. Prepare the client code. Prepare any necessary executables for the device you are attempting to onboard. Some devices require you to specify the server and Device ID at compile-time, whereas others will require additional configuration after compiling. The Device ID is the name that you provided CDP with in the previous step. The server address for your CDP instance follows this format:

    ~~~~
    coap://<CDP_SERVER_IP>:<CDP_COAP_PORT>
    ~~~~

    Note: By default, the CoAP port is __5683__.

3. Connect the device to power and connect it to the internet. Your device should automatically register with CDP, at which time you may begin running jobs on the device.

## Extras

- Device Logs - Device logs will allow you to monitor the CoAP messages sent between CDP and your device. To enable this, select the 'Devices' menu, then select 'View Devices'. Select the device you want to monitor, then click the yellow document icon in the top pane. Inside of the pop-up, click the blue icon in the top left corner to enable device logging.