# CDP NBI API Demo

This readme will go over how to interact with CDP, starting with adding a device and action to the server and then finally executing a job on the device.

1. Prepare the client. Follow along with the README for your device from this [section](http://github.com/nokia/cdp-developer-ecosystem/tree/master/client) to prepare your device for CDP.
2. Add a device. Log in to the CDP UI, then go to 'Device' > 'Add Device' from the sidebar. Name your device in the ID field, and set the Manufacturer as 'Generic' and the model as 'LWM2M Generic Device'.
3. Add an action. To interact with the device, we will need an action use in our job. From the CDP UI, navigate to 'Action' > 'Add Action' and create an action with the following parameters. This is a standard LWM2M object, so it will work on any LWM2M device.

    ~~~~
    Name: Give it a unique name
    Primitive: LWM2M.read
    Path: /3/0/0
    Format: tlv
    Encoding: string
    ~~~~

4. Get the device ID. Run the 'getDevices' example, which will print out the devices connected to your CDP instance. Find the entry for your device, which should look like this:

    ~~~~
    Device name: Your First LWM2M Device!
    Numeric ID: 141
    Manufacturer: Generic
    Model: LWM2M Generic Device
    ~~~~

    You will need to use the numeric ID to interact with your device through the REST APIs.

5. Get the action ID. Run the 'getActions' example, which will print out all supported actions on CDP. Find the entry for the action you created, which should look like this:

    ~~~~
    Action name: Your First LWM2M Action!
    Numeric ID: 72
    ~~~~

    You will need this numeric ID to use the action in a Job through the REST API.

6. Submitting a Job. Open the 'queueJob' example, and set the job equal to the following

    ~~~~
    var job = {
        actionId: <YOUR_NUMERIC_ACTION_ID>
        needNotification: true,
        enabledNbiNotification: true
    }
    ~~~~

    Execute the job by running the edited example.

7. Finding correlator ID. Open the 'getJobHistory' example, and set 'deviceId' equal to the *numeric* device ID, like so:

    ~~~~
    var deviceId = <YOUR_NUMERIC_DEVICE_ID>;
    ~~~~

    Run the example, and when it returns the jobs, find the entry corresponding to the most recently queued job. It should be the job with the most recent timestamp, and should look like so:

    ~~~~
    JOB NAME: <YOUR_JOB_NAME>
    Correlator ID: <Correlator ID>
    Time: Fri, 28 Apr 2017 14:59:59 GMT
    ~~~~

    The Correlator ID is essential for tracking the details of your posted job.

8. Finding job details. To find the results of the job we posted, use the correlator ID found in the previous step. Open the 'getJobDetails' example, and set 'deviceId' and 'jobId' to your respective IDs, like so:

    ~~~~
    var jobId = <CORRELATOR_ID>;
    var deviceId = <NUMERIC_DEVICE_ID>
    ~~~~

    After editing these values, you may then execute the example to read the data from your posted job.