200-299 = successful response: TRUE
404 = not found: FALSE
500 = server error: FALSE

try/catch: catches exceptions and errors that occur during the execution of the code, including network errors, and other unexpected issues.

response.ok = checks the success of the HTTP response status, 
which might not throw an error but still indicates a failure.