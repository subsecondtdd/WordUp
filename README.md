# WordUp

A turn based word game with full stack acceptance tests that run
in milliseconds.

## Running asynchronously

The default assembly runs everything in-memory. Even though the
APIs are `async`, the implementation is synchronous, so the system
is immediately consistent.

This makes it impossible to detect concurrency bugs that might
occur in an asynchronous environment (such as the production assembly).

One way to address this is to run the scenarios in an asynchronous
assembly that uses I/O. That would most likely trip the bugs. However, 
these tests are significantly slower.

Setting the below environment variable adds a delay (in milliseconds)
to every actor's call. Promises are not `await`ed, which allows
other tasks to execute in parallel, more similar to the production
assembly. None of the proxied methods have return values,
so it's OK to discard them. Errors are simply logged.

    wordup_async_character=1 yarn test