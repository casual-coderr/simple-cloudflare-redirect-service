## How to Implement

+ Go to the KV section in cloudflare dashboard create a new KV with some name
+ Go to the Workers pane in Cloudflare
+ Copy the code from index.js to the worker
+ Next Go to the  KV Namespace Binding in settings of the worker
+ Give the variable name as REDIRECT_KV and link it to the name of KV you created and hit save.
+ Now whatever you add in the KV namespace can be used as a redirect link.
