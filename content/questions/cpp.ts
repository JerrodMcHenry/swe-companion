import type { Question } from "../types";

const CPPREF = "https://en.cppreference.com/w/cpp";
const CG = "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines";

// C++ language questions for systems and trading-firm engineering roles. Answers are original; examples are
// compiled and run with C++20. Practical exercises are representative, not documented employer questions.
const questions: Question[] = [
  {
    group: "Memory & pointers",
    question: "What is the difference between a pointer and a reference?",
    answer:
      "A reference is an alias for an existing object: it must be initialized, cannot be null in valid code and cannot be reseated to refer to something else. A pointer is an object holding an address: it can be null, reassigned, and needs explicit dereferencing. Use references for parameters that must refer to an object, and pointers (preferably smart pointers or plain non-owning pointers) when “no object” is meaningful or the target can change.",
    code: `int a = 1, b = 2;
int& r = a;      // r is another name for a
int* p = &a;
r = b;           // assigns 2 to a; r still refers to a
p = &b;          // p now points to b
std::cout << a << ' ' << *p << '\\n';   // -> 2 2`,
    source: { title: "cppreference — Reference declaration", url: `${CPPREF}/language/reference` },
  },
  {
    group: "Memory & pointers",
    question: "What is the difference between stack and heap allocation in C++?",
    answer:
      "The standard speaks of automatic and dynamic storage duration; “stack” and “heap” are how implementations typically provide them. Automatic (stack) objects are created and destroyed with their scope: allocation is nearly free and lifetime is deterministic, but size must be known at compile time and the stack is limited (often a few megabytes). Dynamic (heap) objects live until explicitly freed, can be any size, and are needed when lifetime outlives a scope, but allocation is slower, can fragment memory and must be managed. In performance-sensitive code, prefer stack objects and preallocated memory, and avoid allocating in hot paths.",
    source: { title: "cppreference — Storage duration", url: `${CPPREF}/language/storage_duration` },
  },
  {
    group: "Memory & pointers",
    question: "What is a dangling pointer or reference? Give an example.",
    answer:
      "It refers to an object whose lifetime has ended, so using it is undefined behaviour. Common causes: returning a reference or pointer to a local variable, keeping a pointer after delete, and holding a pointer or iterator into a vector that has since reallocated. Prevent it with clear ownership (smart pointers), returning by value, and not storing pointers into containers that may grow.",
    code: `const std::string& bad() {
    std::string s = "temp";
    return s;               // dangling: s is destroyed when bad() returns
}
std::string good() { return "temp"; }   // return by value instead`,
    source: { title: "C++ Core Guidelines — F.43: Never return a pointer or reference to a local object", url: `${CG}#rf-dangle` },
  },
  {
    group: "Object lifetime & RAII",
    question: "What is RAII, and why is it central to C++?",
    answer:
      "Resource Acquisition Is Initialization: tie each resource (memory, file, lock, socket) to an object whose constructor acquires it and whose destructor releases it. Because destructors run automatically when objects go out of scope, including when a caught exception unwinds the stack, owned resources do not leak and cleanup code is not duplicated. Standard examples are std::unique_ptr, std::vector, std::lock_guard and std::fstream.",
    code: `std::mutex m;
int counter = 0;
void increment() {
    std::lock_guard<std::mutex> lock(m);   // locks here
    ++counter;
}                                          // unlocks here, even if an exception is thrown`,
    source: { title: "cppreference — RAII", url: `${CPPREF}/language/raii` },
  },
  {
    group: "Object lifetime & RAII",
    question: "When do you use unique_ptr, shared_ptr and weak_ptr?",
    answer:
      "Use std::unique_ptr by default for exclusive ownership: with the default deleter it is typically the size of a raw pointer with no access overhead, and it can be moved but not copied. Use std::shared_ptr only when ownership is genuinely shared; it keeps an atomically updated reference count, which costs memory and time. Use std::weak_ptr to observe a shared object without owning it, for example to break reference cycles, checking with lock() before use. Create them with std::make_unique and std::make_shared.",
    code: `auto owner = std::make_unique<int>(42);
auto moved = std::move(owner);            // ownership transferred
std::cout << (owner == nullptr) << ' ' << *moved << '\\n';   // -> 1 42

auto shared = std::make_shared<int>(7);
std::weak_ptr<int> watcher = shared;
std::cout << shared.use_count() << '\\n';                    // -> 1`,
    source: { title: "cppreference — std::unique_ptr", url: `${CPPREF}/memory/unique_ptr` },
  },
  {
    group: "Object lifetime & RAII",
    question: "What are the rules of zero, three and five?",
    answer:
      "If a class needs a custom destructor, copy constructor or copy assignment, it almost certainly needs all three (rule of three); with move semantics, add the move constructor and move assignment (rule of five). Better still, follow the rule of zero: build classes from members that already manage their resources (smart pointers, containers), so the compiler-generated special members are correct and you write none of them. Note that declaring a destructor or copy operation suppresses the implicit move operations, silently turning moves into copies.",
    source: { title: "cppreference — The rule of three/five/zero", url: `${CPPREF}/language/rule_of_three` },
  },
  {
    group: "Object lifetime & RAII",
    question: "Why should a polymorphic base class have a virtual destructor?",
    answer:
      "Deleting a derived object through a base-class pointer calls the base destructor only, unless the destructor is virtual; that is undefined behaviour and in practice leaks the derived part's resources. Make the destructor public and virtual if the class is meant to be deleted polymorphically, or protected and non-virtual if it is not.",
    source: { title: "C++ Core Guidelines — C.35: A base class destructor should be public and virtual, or protected and non-virtual", url: `${CG}#rc-dtor-virtual` },
  },
  {
    group: "Copy & move",
    question: "What is move semantics, and what does std::move actually do?",
    answer:
      "Moving transfers an object's resources (for example a vector's heap buffer) to another object instead of copying them, Standard library types leave the source in a valid but unspecified state; your own types leave whatever their move operations leave. std::move does not move anything: it is a cast to an rvalue reference, which allows a move constructor or move assignment to be chosen. After moving from an object, only assign to it, destroy it or call operations with no preconditions (such as clear()); do not rely on its value.",
    code: `std::vector<int> a(1000, 1);
std::vector<int> b = std::move(a);   // steals a's buffer: O(1), no element copies
std::cout << b.size() << '\\n';      // -> 1000`,
    source: { title: "cppreference — std::move", url: `${CPPREF}/utility/move` },
  },
  {
    group: "Copy & move",
    question: "Why should move constructors be noexcept?",
    answer:
      "When std::vector grows, it must keep its strong exception guarantee. It moves elements into the new buffer only if their move constructor is noexcept (or the type cannot be copied); otherwise it copies them, which can be much slower. Marking a move constructor noexcept (and making sure it really cannot throw) lets containers use it.",
    source: { title: "C++ Core Guidelines — C.66: Make move operations noexcept", url: `${CG}#rc-move-noexcept` },
  },
  {
    group: "Copy & move",
    question: "How should you pass parameters: by value, by const reference or by rvalue reference?",
    answer:
      "Pass cheap-to-copy types (integers, pointers, small structs) by value. Pass larger read-only inputs by const reference to avoid copying. If the function stores its own copy (a “sink”), taking the parameter by value and moving from it is simple and efficient. Use rvalue references mainly for move constructors and assignment, and forwarding references in templates.",
    source: { title: "C++ Core Guidelines — F.16: For “in” parameters, pass cheaply-copied types by value and others by reference to const", url: `${CG}#rf-in` },
  },
  {
    group: "Polymorphism & templates",
    question: "How do virtual functions work, and what do they cost?",
    answer:
      "Typically each polymorphic class has a table of function pointers (vtable), and each object stores a pointer to its class's table. A virtual call loads that pointer and calls through the table, so the target is chosen at run time. The cost is an indirect call that usually cannot be inlined and may miss the cache or branch predictor, plus one pointer per object. Compilers can devirtualize calls when the dynamic type is known (for example with final). In hot loops this matters; elsewhere it rarely does.",
    source: { title: "cppreference — Virtual function specifier", url: `${CPPREF}/language/virtual` },
  },
  {
    group: "Polymorphism & templates",
    question: "When would you use templates instead of virtual functions?",
    answer:
      "Templates give static polymorphism: the concrete type is known at compile time, so calls can be inlined with no run-time dispatch, at the cost of longer compile times, larger binaries and less flexibility (types must be known at compile time). Virtual functions give dynamic polymorphism: one compiled interface, types chosen at run time, such as plugins or heterogeneous collections. Latency-sensitive code often prefers templates in the hot path.",
    code: `template <typename Strategy>
double price(const Strategy& s, double x) { return s(x); }   // resolved at compile time

struct Double { double operator()(double x) const { return 2 * x; } };
std::cout << price(Double{}, 1.5) << '\\n';                  // -> 3`,
    source: { title: "cppreference — Templates", url: `${CPPREF}/language/templates` },
  },
  {
    group: "Polymorphism & templates",
    question: "What is object slicing?",
    answer:
      "Copying a derived object into a base-class object by value copies only the base part: derived members and overridden behaviour are lost. It happens with pass-by-value parameters and containers of base objects. Use references or pointers (usually smart pointers) to handle polymorphic objects.",
    code: `struct Base { virtual std::string name() const { return "Base"; } virtual ~Base() = default; };
struct Derived : Base { std::string name() const override { return "Derived"; } };

Derived d;
Base copy = d;           // sliced
const Base& ref = d;     // not sliced
std::cout << copy.name() << ' ' << ref.name() << '\\n';   // -> Base Derived`,
    source: { title: "C++ Core Guidelines — C.67: A polymorphic class should suppress public copy/move", url: `${CG}#rc-copy-virtual` },
  },
  {
    group: "Containers",
    question: "Why is std::vector usually faster than std::list, even for insertions?",
    answer:
      "A vector stores elements contiguously, so iteration is cache-friendly and the hardware prefetcher keeps data flowing; a list allocates each node separately and follows pointers, causing cache misses. Even though list insertion is O(1) once you have the position, finding that position is O(n) with poor locality, so for small and moderately sized elements a vector with shifting usually wins; measure for your case. Use a list only when you need stable iterators or frequent splicing of large elements.",
    source: { title: "cppreference — std::vector", url: `${CPPREF}/container/vector` },
  },
  {
    group: "Containers",
    question: "When do you choose std::map or std::unordered_map?",
    answer:
      "std::map is a balanced tree: O(log n) operations, keys kept in order, so it supports range queries and ordered iteration. std::unordered_map is a hash table: O(1) average, O(n) worst case, no ordering, and rehashing can invalidate iterators and cause latency spikes. Choose unordered_map for pure lookups, map when you need order. For small or performance-critical cases, a sorted vector or a flat open-addressing hash table often beats both.",
    source: { title: "cppreference — std::unordered_map", url: `${CPPREF}/container/unordered_map` },
  },
  {
    group: "Containers",
    question: "What is iterator invalidation in std::vector, and what is the difference between reserve and resize?",
    answer:
      "When a vector exceeds its capacity it reallocates, and every pointer, reference and iterator to its elements becomes invalid; insertions and erasures also invalidate those at or after the position. reserve(n) only allocates capacity, so later push_backs do not reallocate; resize(n) changes the size, constructing or destroying elements. Reserve up front when you know the size, especially in latency-sensitive code.",
    code: `std::vector<int> v;
v.reserve(100);
std::cout << v.size() << ' ' << (v.capacity() >= 100) << '\\n';   // -> 0 1
v.resize(3);
std::cout << v.size() << ' ' << v[2] << '\\n';           // -> 3 0`,
    source: { title: "cppreference — std::vector::reserve", url: `${CPPREF}/container/vector/reserve` },
  },
  {
    group: "Undefined behaviour",
    question: "What is undefined behaviour? Give examples.",
    answer:
      "Code whose behaviour the standard does not define: the program may crash, appear to work or behave differently under optimization, because compilers assume undefined behaviour never happens and optimize accordingly. Common examples: signed integer overflow, out-of-bounds access, dereferencing null or dangling pointers, use after free, reading uninitialized variables, data races and violating strict aliasing.",
    source: { title: "cppreference — Undefined behavior", url: `${CPPREF}/language/ub` },
  },
  {
    group: "Undefined behaviour",
    question: "How do you find undefined behaviour and memory errors?",
    answer:
      "Compile with warnings enabled (-Wall -Wextra) and treat them seriously; run tests under sanitizers: AddressSanitizer for out-of-bounds and use-after-free, UndefinedBehaviorSanitizer for overflow and similar errors, and ThreadSanitizer for data races. Add static analysis, and fuzz code that parses external input. Sanitizers only find bugs on paths your tests execute.",
    code: `# build and run tests with sanitizers
clang++ -std=c++20 -g -fsanitize=address,undefined main.cpp && ./a.out
clang++ -std=c++20 -g -fsanitize=thread main.cpp && ./a.out`,
    source: { title: "Clang — AddressSanitizer", url: "https://clang.llvm.org/docs/AddressSanitizer.html" },
  },
  {
    group: "Concurrency in C++",
    question: "What is a data race, and how do you prevent one?",
    answer:
      "A data race is two threads accessing the same memory location, at least one of them writing, where the accesses are not both atomic and are not ordered by synchronization (a mutex, atomics or thread join). In C++ it is undefined behaviour, not just a wrong result. Prevent it by protecting shared data with a mutex (via std::lock_guard or std::scoped_lock), using std::atomic for simple shared values, or not sharing mutable data at all, for example by passing messages between threads.",
    source: { title: "cppreference — Memory model: threads and data races", url: `${CPPREF}/language/memory_model` },
  },
  {
    group: "Concurrency in C++",
    question: "What does std::atomic give you, and is volatile a substitute?",
    answer:
      "std::atomic makes individual operations on a value indivisible and, by default (memory_order_seq_cst), also orders surrounding memory accesses, with all seq_cst operations appearing in one total order that every thread agrees on. Weaker orderings are cheaper on some hardware (on x86, acquire loads and release stores are plain moves, while a seq_cst store needs a locked instruction or fence) but harder to reason about: release/acquire publishes data from one thread to another, and relaxed gives atomicity only, which is enough for a counter read after join(), as below. Atomics suit counters, flags and lock-free structures; they do not make multi-step logic safe, and std::atomic<T> is not guaranteed to be lock-free (check is_lock_free()). volatile is not a substitute: it prevents certain compiler optimizations for hardware access but provides neither atomicity nor inter-thread ordering.",
    code: `std::atomic<int> hits{0};
std::vector<std::thread> threads;
for (int t = 0; t < 4; ++t)
    threads.emplace_back([&] { for (int i = 0; i < 1000; ++i) hits.fetch_add(1, std::memory_order_relaxed); });
for (auto& th : threads) th.join();
std::cout << hits << '\\n';   // -> 4000`,
    source: { title: "cppreference — std::atomic", url: `${CPPREF}/atomic/atomic` },
  },
  {
    group: "Concurrency in C++",
    question: "How does a condition variable work, and why use a predicate when waiting?",
    answer:
      "A condition variable lets a thread sleep until another thread signals that some condition may have changed. The waiting thread holds a mutex, calls wait, which atomically releases the mutex and sleeps, and re-acquires it on wake-up. Always wait with a predicate (or in a loop): wake-ups can be spurious, another thread may already have consumed the condition, and checking first avoids sleeping on a notification that was sent before you started waiting. Change the shared state while holding the mutex, or the notification can be missed.",
    source: { title: "cppreference — std::condition_variable", url: `${CPPREF}/thread/condition_variable` },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: implement a thread-safe queue.",
    answer:
      "Protect a std::queue with a mutex; push locks, adds and notifies one waiter; pop waits on a condition variable with a predicate until the queue is non-empty. Discuss follow-ups: a bounded version that blocks producers when full, shutting down waiting consumers, and why a lock-free single-producer single-consumer ring buffer can be faster for low latency.",
    code: `template <typename T>
class SafeQueue {
    std::queue<T> q_;
    std::mutex m_;
    std::condition_variable cv_;
public:
    void push(T value) {
        { std::lock_guard<std::mutex> lock(m_); q_.push(std::move(value)); }
        cv_.notify_one();
    }
    T pop() {
        std::unique_lock<std::mutex> lock(m_);
        cv_.wait(lock, [this] { return !q_.empty(); });
        T value = std::move(q_.front());
        q_.pop();
        return value;
    }
};

SafeQueue<int> q;
std::thread producer([&] { for (int i = 1; i <= 3; ++i) q.push(i); });
int sum = q.pop() + q.pop() + q.pop();
producer.join();
std::cout << sum << '\\n';   // -> 6`,
    source: { title: "cppreference — std::condition_variable", url: `${CPPREF}/thread/condition_variable` },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: implement a fixed-size circular buffer.",
    answer:
      "Use a preallocated array with head and tail indices that wrap around (index % capacity, or a bitmask when the capacity is a power of two) and a count or one empty slot to tell full from empty. Push and pop are O(1) with no allocation, which is why ring buffers are common in streaming and low-latency systems. Discuss what happens when full (reject, overwrite oldest or block) and how a single-producer single-consumer version can be made lock-free with atomic indices.",
    code: `template <typename T, std::size_t N>
class Ring {
    std::array<T, N> data_{};
    std::size_t head_ = 0, size_ = 0;
public:
    bool push(T v) {
        if (size_ == N) return false;
        data_[(head_ + size_) % N] = v;
        ++size_;
        return true;
    }
    std::optional<T> pop() {
        if (size_ == 0) return std::nullopt;
        T v = data_[head_];
        head_ = (head_ + 1) % N;
        --size_;
        return v;
    }
};

Ring<int, 2> r;
std::cout << r.push(1) << r.push(2) << r.push(3) << ' ' << *r.pop() << '\\n';   // -> 110 1`,
    source: { title: "LeetCode — Design Circular Queue", url: "https://leetcode.com/problems/design-circular-queue/" },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: design a simplified limit order book.",
    answer:
      "Keep bids and asks as price levels: an ordered map from price to a FIFO queue of orders (bids sorted descending, asks ascending), plus a hash map from order ID to its location for O(1) cancels. A new order matches against the best opposite levels while prices cross, filling oldest orders first (price-time priority), and any remainder rests in the book. Discuss complexity, cancels, partial fills, and why low-latency implementations often replace node-based maps with arrays indexed by price tick.",
    source: { title: "LeetCode — Number of Orders in the Backlog (a related matching problem)", url: "https://leetcode.com/problems/number-of-orders-in-the-backlog/" },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: a counter shared between threads sometimes ends up wrong. How do you diagnose and fix it?",
    answer:
      "Suspect a data race: increment is a read-modify-write, so two threads can read the same value and lose an update. Confirm with ThreadSanitizer or a stress test, then fix with std::atomic (fetch_add) for a single counter, or a mutex when several values must change together. For heavy contention, give each thread its own counter (padded to avoid false sharing) and sum them at the end.",
    source: { title: "Clang — ThreadSanitizer", url: "https://clang.llvm.org/docs/ThreadSanitizer.html" },
  },
];

export default questions;
