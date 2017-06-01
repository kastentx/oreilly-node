const buf = new Buffer(4);

// writing values to buffer
buf.writeUInt8(0x63, 0);
buf.writeUInt8(0x61, 1);
buf.writeUInt8(0x74, 2);
buf.writeUInt8(0x73, 3);

// print buffer as string
console.log(buf.toString());
