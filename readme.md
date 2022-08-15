## How to Implement

+ Go to the KV section in cloudflare dashboard create a new KV with some name

 ![[./attachments/Screenshot 2022-08-14 at 5.13.37 PM.png]]

+ Go to the Workers pane in Cloudflare and click create a service

 ![[Screenshot 2022-08-14 at 5.10.23 PM.png]]

+ Give it a name, so this will be the url for your service worker and click create service

![[Screenshot 2022-08-14 at 5.10.41 PM.png]]

![[Screenshot 2022-08-14 at 5.11.06 PM.png]]

+ Click on Quick Edit and Copy the code from index.js to the worker

 ![[Screenshot 2022-08-14 at 5.11.21 PM.png]]

 ![[Screenshot 2022-08-14 at 5.11.38 PM.png]]

+ Next Go to the  KV Namespace Binding in settings of the worker
 ![[Screenshot 2022-08-14 at 5.12.21 PM.png]]

+ Give the variable name as REDIRECT_KV and link it to the name of KV you created and hit save.
![[Screenshot 2022-08-14 at 5.13.12 PM.png]]
 
+ Now whatever you add in the KV namespace can be used as a redirect link.
![[Screenshot 2022-08-14 at 5.13.49 PM.png]]

+ Your service will be available at url.workerdomain.workers.dev/kv-value
![[Screenshot 2022-08-14 at 5.14.37 PM.png]]

You are free to add as much links you want. You have successfully created a mini Bit.ly Service