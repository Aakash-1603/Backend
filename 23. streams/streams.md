
# Node.js Streams

## Introduction
Node.js **streams** are a powerful way to handle reading/writing data efficiently. 
They allow you to process data piece-by-piece, without having to keep it all in memory.

Common use cases:
- Reading/writing files
- Handling HTTP requests/responses
- Streaming video/audio
- Working with large datasets

---

## Why Use Streams?
- **Memory Efficient**: Process data in chunks instead of loading all into memory.
- **Faster Processing**: Start processing as soon as chunks arrive.
- **Scalable**: Handles large data without memory overflow.

---

## Types of Streams in Node.js
Node.js has **four** main types of streams:

1. **Readable Streams**  
   - Used for reading data.  
   - Examples: `fs.createReadStream()`, `http.IncomingMessage`.
   ```js
   const fs = require('fs');
   const readable = fs.createReadStream('file.txt', 'utf8');

   readable.on('data', chunk => {
       console.log('Received chunk:', chunk);
   });
   ```

2. **Writable Streams**  
   - Used for writing data.  
   - Examples: `fs.createWriteStream()`, `http.ServerResponse`.
   ```js
   const fs = require('fs');
   const writable = fs.createWriteStream('output.txt');

   writable.write('Hello, World!');
   writable.end();
   ```

3. **Duplex Streams**  
   - Both readable and writable.  
   - Example: `net.Socket`.
   ```js
   const { Duplex } = require('stream');

   const duplex = new Duplex({
       read(size) {
           this.push('Hello from read!');
           this.push(null);
       },
       write(chunk, encoding, callback) {
           console.log('Written:', chunk.toString());
           callback();
       }
   });

   duplex.on('data', console.log);
   duplex.write('Hello from write!');
   ```

4. **Transform Streams**  
   - Duplex streams that can modify data during read/write.  
   - Example: `zlib.createGzip()`.
   ```js
   const { Transform } = require('stream');

   const upperCase = new Transform({
       transform(chunk, encoding, callback) {
           callback(null, chunk.toString().toUpperCase());
       }
   });

   process.stdin.pipe(upperCase).pipe(process.stdout);
   ```

---

## Important Stream Methods & Events

### Methods
- `.pipe(destination)` → Pipe data from one stream to another.
- `.unpipe(destination)` → Stop piping.
- `.read(size)` → Read data from stream.
- `.write(chunk)` → Write data to stream.
- `.end()` → End a writable stream.

### Events
- **Readable Streams**
  - `data` → Emitted when a chunk is available.
  - `end` → No more data.
  - `error` → Error occurred.
- **Writable Streams**
  - `finish` → All writes complete.
  - `error` → Error occurred.

---

## Example: Copy a File using Streams
```js
const fs = require('fs');

const readable = fs.createReadStream('source.txt');
const writable = fs.createWriteStream('destination.txt');

readable.pipe(writable);
```

---

## Flowing vs Non-Flowing Mode

- **Flowing Mode** → Data is read automatically and provided via `data` events.
- **Non-Flowing Mode** → Must call `.read()` manually to get data.

Example:
```js
// Flowing mode
readable.on('data', chunk => console.log(chunk));

// Non-flowing mode
readable.on('readable', () => {
    let chunk;
    while (null !== (chunk = readable.read())) {
        console.log(chunk);
    }
});
```

---

## Backpressure in Streams
Backpressure happens when a **writable stream** cannot handle the incoming data speed from a **readable stream**.

Solution:
- Use `.pipe()` (built-in backpressure handling).
- Manually check `.write()` return value before writing more data.

---

## Summary
- Streams are memory-efficient and fast for large data.
- Four main types: **Readable, Writable, Duplex, Transform**.
- Use `.pipe()` to connect streams easily.
- Handle **backpressure** for smooth performance.

---

**References:**
- [Node.js Streams Documentation](https://nodejs.org/api/stream.html)
- [Stream Handbook](https://github.com/substack/stream-handbook)
