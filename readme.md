## How to Implement

+ Go to the KV section in cloudflare dashboard create a new KV with some name

![1](https://user-images.githubusercontent.com/93610399/184642855-0429b76f-b142-4f0f-975a-fd26d08bdb43.png)


+ Go to the Workers pane in Cloudflare and click create a service

![2](https://user-images.githubusercontent.com/93610399/184642878-43063fbe-9424-4db8-86aa-addca2a0b2c9.png)


+ Give it a name, so this will be the url for your service worker and click create service

![3](https://user-images.githubusercontent.com/93610399/184642893-586864e1-c2a6-4ded-885a-ca191781106c.png)


![4](https://user-images.githubusercontent.com/93610399/184642915-bbbe8663-36c8-4ca9-846f-1f3cdda3cbda.png)


+ Click on Quick Edit and Copy the code from index.js to the worker

![5](https://user-images.githubusercontent.com/93610399/184642935-04bb3d5e-5c4c-4e36-8ab4-05553b0495c4.png)

![6](https://user-images.githubusercontent.com/93610399/184642948-1e1813cd-92a8-4648-987d-e43ae97e1e9a.png)

+ Next Go to the  KV Namespace Binding in settings of the worker
 
![7](https://user-images.githubusercontent.com/93610399/184642978-53f2f189-aea4-40c2-93d4-f4f9e07b9373.png)

+ Give the variable name as REDIRECT_KV and link it to the name of KV you created and hit save.

 ![8](https://user-images.githubusercontent.com/93610399/184642995-a4468f5e-f242-4fb8-8acd-062dc446d130.png)

+ Now whatever you add in the KV namespace can be used as a redirect link.

![9](https://user-images.githubusercontent.com/93610399/184643018-fd50eb3c-6ce5-4e36-a21d-99feb24261b7.png)

+ Your service will be available at url.workerdomain.workers.dev/kv-value

![10](https://user-images.githubusercontent.com/93610399/184643035-768678b3-37a8-4596-aeee-c5225520f462.png)

You are free to add as much links you want. You have successfully created a mini Bit.ly Service
