# CDP Developer Ecosystem GitHub

## Table of Contents

#### Accessing CDP Console

To access the CDP console, navigate to the following link with respect to your instance of CDP.

~~~~
http://<host>:<port>/ui
~~~~

#### Accessing the REST Documentation (Swagger Docs)

You can access the REST documentation from your CDP Server Instance or from your local machine. Navigate to [this](https://github.com/nokia/cdp-developer-ecosystem/tree/master/docs/rest) section to learn more.

#### Device Onboarding

This section includes documentation, videos, and client code with information to onboard a device with CDP. We have documented the process for the following devices:
- [Raspberry Pi, Eclipse Leshan Client (Java)](https://github.com/nokia/cdp-developer-ecosystem/tree/master/client/RaspberryPi)
- [Bosch XDK110, Bosch LWM2M Client (C)](https://github.com/nokia/cdp-developer-ecosystem/tree/master/client/BoschXDK)
- [NXP LPC1768 mbed Device, Eclipse Wakaama Client (C)](https://github.com/nokia/cdp-developer-ecosystem/tree/master/client/LPC1768)
- [NXP FRDM-K64F mbed Device, Eclipse Wakaama Client (C/C++)](https://github.com/nokia/cdp-developer-ecosystem/tree/master/client/FRDM-K64F)

Beyond these devices, you may connect any device that supports the Java Runtime (1.7 or greater) with the Leshan client. Eclipse Wakaama is designed to be POSIX-compliant,
and as such can be ported to many *nix environments

#### NBI API Demos

This section includes some sample code in Java and Node.js that demonstrates how to interact with CDP's REST APIs to modify devices and execute jobs.

- [Java Examples](https://github.com/nokia/cdp-developer-ecosystem/tree/master/examples/java)
- [Node.js Examples](https://github.com/nokia/cdp-developer-ecosystem/tree/master/examples/node)
