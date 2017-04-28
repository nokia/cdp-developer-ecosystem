# Wakaama-K64F

This is an implementation of the Wakaama client for the NXP FRDM-K64F running mbed. This library should be compatible with any mbed device by replacing these platform-specific libraries:

- EthernetInterface
- mbed-rtos
- mbed

To compile for the K64F, import this project into the [mbed Compiler](https://developer.mbed.org/compiler "mbed Compiler") as a project for the FRDM-K64F. Then, add the following macros under the 'Compile' menu:

    LWM2M_EMBEDDED_MODE
    LWM2M_CLIENT_MODE

This project contains a simple main that will register the device over CoAP with an LWM2M server.

## Modifications made for K64F

The original project that this was based on was for the LPC1768. To implement for the K64F, some changes needed to be made.

#### Missing standard library functions

Wakaama by default uses 'sys/time.h', although this library is not available in the mbed toolchain. 'lwm2m_gettimeofday()' was implemented in lwm2m.c to populate the internal time struct with the return value from 'time()'.

Furthermore, the mbed string library does not have 'strdup()', so an implementation using 'strcpy()' was added to the project.

#### Compilation issues

The EthernetInterface library for the K64F on the mbed Compiler has issues by default. Library attempted to access an unavailable member (rxBdDirty) of the struct '_enet_handler'. This member was only written to, and never read from, so the offending lines were removed and the library would then compile.

## Notes

Original credit to the Eclipse Foundation and Julien Vermillard (http://github.com/jvermillard) for this project.
