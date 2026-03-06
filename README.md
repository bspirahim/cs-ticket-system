## React Basic Questions & Answers

### ১. JSX কী এবং কেন এটি ব্যবহৃত হয়?

**JSX (JavaScript XML)** হলো জাভাস্ক্রিপ্টের একটি সিনট্যাক্স এক্সটেনশন যা দেখতে অনেকটা HTML-এর মতো।

**কেন ব্যবহার হয়:**

* এটি ডেভেলপারদের জাভাস্ক্রিপ্ট ফাইলের মধ্যেই UI-এর গঠন (Structure) লিখতে সাহায্য করে।
* কোডকে আরও সহজপাঠ্য (Readable) করে।
* `React.createElement()` এর মতো জটিল ফাংশন বারবার লেখার প্রয়োজন কমিয়ে দেয়।

---

### ২. State এবং Props-এর মধ্যে পার্থক্য কী?

রিঅ্যাক্টে ডেটা ম্যানেজমেন্টের জন্য **State** এবং **Props** ব্যবহৃত হয়।

**Props (Properties):**

* প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠানোর জন্য ব্যবহৃত হয়।
* এটি **Read-only** বা অপরিবর্তনযোগ্য।
* চাইল্ড কম্পোনেন্ট props পরিবর্তন করতে পারে না।

**State:**

* এটি একটি কম্পোনেন্টের নিজস্ব ডেটা বা মেমোরি।
* সময়ের সাথে পরিবর্তন হতে পারে।
* যখন state পরিবর্তন হয়, তখন কম্পোনেন্টটি **re-render** হয়।

---

### ৩. useState হুক কী এবং এটি কীভাবে কাজ করে?

`useState` হলো একটি **React Hook** যা ফাংশনাল কম্পোনেন্টে state ব্যবহার করার সুযোগ দেয়।

**কাজ করার পদ্ধতি:**

* এটি একটি initial value নেয়।
* একটি array return করে।

Array এর দুইটি অংশ থাকে:

1. বর্তমান state value
2. state update করার function

**উদাহরণ:**

```javascript
const [data, setData] = useState(initialValue);
```

* `data` → বর্তমান state
* `setData` → state আপডেট করার function

---

### ৪. কম্পোনেন্টগুলোর মধ্যে state কীভাবে শেয়ার করা যায়?

রিঅ্যাক্টে সাধারণত **Lifting State Up** পদ্ধতির মাধ্যমে state শেয়ার করা হয়।

**প্রক্রিয়া:**

1. যখন একাধিক কম্পোনেন্টের একই ডেটা প্রয়োজন হয়
2. তখন state তাদের **common parent component** এ রাখা হয়
3. এরপর props এর মাধ্যমে নিচের কম্পোনেন্টগুলোতে পাঠানো হয়

বড় অ্যাপ্লিকেশনে state ম্যানেজমেন্টের জন্য ব্যবহার করা হয়:

* Context API
* Redux

---

### ৫. রিঅ্যাক্টে Event Handling কীভাবে করা হয়?

রিঅ্যাক্টে event handling অনেকটা HTML এর মতো হলেও কিছু পার্থক্য আছে।

**মূল নিয়মগুলো:**

* Event name **camelCase** এ লিখতে হয়

  * `onClick`
  * `onChange`

* Event handler হিসেবে **function pass করতে হয়**, string নয়।

**উদাহরণ:**

```jsx
<button onClick={myFunction}>Click Me</button>
```

এখানে `myFunction` হলো একটি JavaScript function যা button এ click করলে execute হবে।

