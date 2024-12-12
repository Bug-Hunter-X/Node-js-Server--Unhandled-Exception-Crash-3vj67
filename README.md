# Node.js Server Unhandled Exception

This repository demonstrates a common error in Node.js servers: unhandled exceptions within the request handler.  The provided code creates a simple HTTP server that, when the `/error` route is accessed, throws an unhandled exception which causes the server to crash. The solution showcases how to properly handle such exceptions to prevent unexpected termination.

## Bug

The bug lies in the absence of proper error handling within the `createServer` callback.  When an error is thrown, Node.js does not handle it gracefully. This leads to the server crashing rather than continuing to operate or presenting a meaningful error response to the client.

## Solution

The solution involves adding an `error` event listener to the HTTP server instance. This listener catches the exceptions thrown within the request handler, allowing for logging, error response generation, or other appropriate actions. This prevents the server from abruptly crashing. 
