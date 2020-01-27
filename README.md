# TypeScript Type Definition Files.

## Generated by [Ext.JS TypeScript Definitions Generator](https://github.com/ExtTS/generator)

## Memory Limits
Those Ex.JS framework definitions could consume a lot of memory to compile your TypeScript project into result Javascript.  
The reason is, because there are all JS Docs texts and all optional packages definitions like Charts, UX etc.  

If you compiling TypeScript project into result Javascript code and you will get error like this (`JavaScript heap out of memory`), increase memory limit for your TypeScript project:

```
[10:00:00 AM] Starting compilation in watch mode...


<--- Last few GCs --->

[11828:00000000003FE740]    42262 ms: Scavenge 1391.8 (1419.4) -> 1391.0 (1420.4) MB, 6.9 / 0.0 ms  (average mu =
0.144, current mu = 0.075) allocation failure
[11828:00000000003FE740]    42275 ms: Scavenge 1391.9 (1420.4) -> 1391.2 (1420.9) MB, 6.7 / 0.0 ms  (average mu =
0.144, current mu = 0.075) allocation failure
[11828:00000000003FE740]    42286 ms: Scavenge 1392.1 (1420.9) -> 1391.3 (1421.4) MB, 6.1 / 0.0 ms  (average mu =
0.144, current mu = 0.075) allocation failure


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0000018F30F5C5C1]
Security context: 0x0259b821e6e9 <JSObject>
    1: getDeclarationName(aka getDeclarationName) [00000111F8E1E499] [C:\Users\Administrator\AppData\Roaming\npm\node_modules\typescript\lib\tsc.js:~23681] [pc=0000018F312F56CA](this=0x00ad658026f1 <undefined>,node=0x00094428d4a9 <Node map = 000000E1B5311F59>)
    2: declareSymbol(aka declareSymbol) [00000111F8E1E519] [C:\Users\Administrator\AppData\Roamin...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 000000013F43D1BA v8::internal::GCIdleTimeHandler::GCIdleTimeHandler+4506
 2: 000000013F417F96 node::MakeCallback+4534
 3: 000000013F418910 node_module_register+2032
 4: 000000013F7326FE v8::internal::FatalProcessOutOfMemory+846
 5: 000000013F73262F v8::internal::FatalProcessOutOfMemory+639
 6: 000000013F918E24 v8::internal::Heap::MaxHeapGrowingFactor+9620
 7: 000000013F90FE06 v8::internal::ScavengeJob::operator=+24550
 8: 000000013F90E45C v8::internal::ScavengeJob::operator=+17980
 9: 000000013F9171A7 v8::internal::Heap::MaxHeapGrowingFactor+2327
10: 000000013F917226 v8::internal::Heap::MaxHeapGrowingFactor+2454
11: 000000013FA414C7 v8::internal::Factory::NewFillerObject+55
12: 000000013FABE6B6 v8::internal::operator<<+73494
13: 0000018F30F5C5C1
```
