---
template: post
title: "Rust và Data Engineering? 🤔" 
date: "2021-11-27T00:00:00.000+07:00"
author: Van-Duyet Le
category: Data
tags:
  - Data Engineer
  - Rust
  - Vietnamese
  - Rust Tiếng Việt
slug: /2021/11/rust-data-engineering.html
thumbnail: https://1.bp.blogspot.com/-iaNZB9YwIog/YaEZjAIHbZI/AAAAAAACXg4/OM-ltRpUCPI6mnl37l3nmtWVFk_gWG1TgCLcBGAsYHQ/s0/rust.png
draft: false
fbCommentUrl: none
description: >
  Đối với một Data Engineer như mình, ưu tiên chọn một ngôn ngữ dựa trên việc nó có giải quyết được hết hầu hết các nhu cầu và bài toán của mình hay không: Data Engineering, Distributed System và Web Development.
  Và cuối cùng mình dự định sẽ bắt đầu với Rust, bởi vì ...
---

Rust mà một trong những ngôn ngữ có tốc độ phát triển nhanh nhất, 
được xếp hạng vào một trong những ngôn ngữ được yêu thích nhất trong 
nhiều năm theo [StackOverflow Survey](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-language-love-dread). 

![For the sixth-year, Rust is the most loved language, while Python is the most wanted language for its fifth-year.](https://1.bp.blogspot.com/-vMsrOjluhsk/YaEajTOjloI/AAAAAAACXhA/jPU7jYzICwgqE9pju-oDp0uFQLIzOsnqwCLcBGAsYHQ/s0/stackoverflow-surveys.png)

Là một Data Engineer (DE) thì mình sử dụng Python (và Typescript) như ngôn ngữ chính mỗi ngày như mọi DE khác. 
Tuy nhiên mình luôn muốn tìm hiểu một ngôn ngữ khác, bởi

- Để hiểu thêm về cách sử dụng một ngôn ngữ low-level và high performance, cái mà Python đã khiến mình lãng quên từ lâu.
- Python không tốt với nhu cầu của mình trong một số trường hợp (build tool, build CLI, quản lý dependency mệt mỏi, không kiểm soát được các edge-case, ...)

Mình đã phải cân nhắc giữa [Golang và Rust](https://bitfieldconsulting.com/golang/rust-vs-go) trong một thời gian dài. 
Bởi vì, Fossil sử dụng Golang cho các Microservices, performance thật sự rất tốt. 
Rust cũng tương tự, rất thường được hay [so sánh với Golang](https://bitfieldconsulting.com/golang/rust-vs-go). 
Đây cũng là hai ngôn ngữ có cú pháp gần với C++, có hiệu năng tốt tương đương về mặt performance, mình đã từng xem 
rất nhiều chục bài viết về benchmark. 
Các ngôn ngữ này còn giải quyết về vấn đề code safety và các công cụ đủ tốt, 
standard và đơn giản cho việc development (ví dụ như `go fmt`, `cargo fmt`, `cargo test`, ...)

# Why Rust?

Đối với mình, mình ưu tiên chọn dựa trên việc nó có giải quyết được hết hầu hết các nhu cầu và bài toán của mình hay không: 
Data Engineering, Distributed System và Web Development.

Và cuối cùng mình dự định sẽ bắt đầu với Rust, bởi vì

## 1. End to end

Rust có thể làm việc với OS System, Networking và Embedding. Được tạo bởi Mozilla, Rust hiện đang được dùng ở  **[Facebook](https://engineering.fb.com/2021/04/29/developer-tools/rust/)**, **[Apple](https://twitter.com/oskargroth/status/1301502690409709568)**, **[Amazon](https://aws.amazon.com/blogs/opensource/why-aws-loves-rust-and-how-wed-like-to-help/)**, **[Microsoft](https://twitter.com/ryan_levick/status/1171830191804551168)**, và **[Google](https://security.googleblog.com/2021/04/rust-in-android-platform.html)** cho các dự án systems infrastructure, encryption và virtualization. Một số dự án nổi bật như: **[Firecracker](https://github.com/firecracker-microvm/firecracker)** (AWS), **[Bottlerocket](https://github.com/bottlerocket-os/bottlerocket)** (AWS), **[Quiche](https://github.com/cloudflare/quiche)** (Cloudflare) và **[Neqo](https://github.com/mozilla/neqo)** (Mozilla).

Rust for the Web: **[WebAssembly](https://webassembly.org/docs/use-cases/)** *(WASM)*: mình còn làm việc với TypeScript và React để xây dựng các Web Tool, WASM là một xu hướng hiện nay, nhiều NPM package đang dần được viết bằng Rust và có thể chạy được trên frontend. Rust cũng đang dần thay thế nhiều thành phần trong hệ sinh thái của Javascript như minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint).
    - **[SWC](http://swc.rs/)** viết bằng Rust, nó là một compilation, minification và bundling cho Typescript. SWC được dùng ở nhiều tools như Next.js, Parcel, và Deno.
    - **[Deno](https://deno.land/)** là một JavaScript và TypeScript runtime viết bằng Rust bởi chính tác giả của Node.js

## 2. Performant by default

Mình sử dụng Python đã nhiều năm cho rất nhiều loại Project, từ Data Platform, Backend, Tools, ... 
Phải nói rằng Python không phải là một lựa chọn tốt nếu bạn cần một Performance tuyệt đối, 
và performance đôi khi không phải dựa vào system design hoàn toàn, mà là do chính bản chất của ngôn ngữ.

Một ví dụ có thể dễ thấy là thuật toán sắp xếp trên Python cực kỳ chậm (do bản chất của `for loop`) khiến người ta viết nó bằng C và chúng ta có các thư viện viết bằng Cython (https://github.com/numpy/numpy/blob/main/numpy/core/src/npysort/timsort.cpp)

## 3. Memory safe

Viết code trên Rust an toàn, hầu hết các lỗi đều được complier phát hiện và giải thích rõ ràng. The compiler is your best friend and will be falled in love with Cargo Clippy.

## 4. Data Intensive System Design

Nhiều project liên quan đến lĩnh vực Data cũng đang dần được viết (hoặc viết lại) bằng Rust (Thrift Rust, Kafka Client Rust, Apache Arrow, ...)

Nhiều design pattern của Rust cũng phù hợp cho các Data Intensive Application.

Mình cũng được truyền cảm hứng nhiều từ nhiều bài viết về Rust, một trong số chúng là: **[Rust is for Big Data (#rust2018)](https://andygrove.io/2018/01/rust-is-for-big-data/). Andy** là tác giả của project Apache Arrow DataFusion và Ballista query engines. Ông giả thuyết rằng nếu Apache Spark được viết lại bằng Rust từ đầu, thì hiệu năng chắc hẳn sẽ tốt hơn, quan trọng nhất là nó có thể *predictable* và *reliable.* Mình có cùng quan điểm khi Spark hay bị vấn đề OutOfMemory của JVM.

```rust
let mut ctx = ExecutionContext::new();

ctx.register_csv("example", "tests/example.csv", CsvReadOptions::new()).await?;

// create a plan
let df = ctx.sql("SELECT a, MIN(b) FROM example GROUP BY a LIMIT 100").await?;

// execute the plan
let results: Vec<RecordBatch> = df.collect().await?;

// format the results
let pretty_results = arrow::util::pretty::pretty_format_batches(&results)?;

let expected = vec![
    "+---+----------------+",
    "| a | MIN(example.b) |",
    "+---+----------------+",
    "| 1 | 2              |",
    "+---+----------------+"
];

assert_eq!(pretty_results.trim().lines().collect::<Vec<_>>(), expected);
```

## 5. Language Tooling

Mình đã phải lòng Cargo - một công cụ chính thức của Rust. 
Cargo thực sự rất mạnh, giúp bạn dễ dàng quản lý các dependency, tác project thành từng crate nhỏ hơn 
(mà không cần quá quan tâm đến cái sự nhức đầu `PYTHONPATH` trong Python nữa). 
Nhiều công cụ như`cargo fmt` (giúp code của mọi người đều chuẩn như nhau), `cargo clippy` (giúp mọi người hiểu bạn đang viết cái gì), ... 
giúp xây dựng các tiêu chuẩn cộng đồng dễ dàng hơn bao giờ hết. 

![Cargo Clippy](/media/2021/11/duyet-clippy.png)

## 6. Rust tests and documentation

Rust và Cargo cho phép bạn có nhiều loại test khác nhau: unit test, tests trong module, integration tests 
trong thư mục `tests/`, test trên docs. Test trên example docs cực kỳ đặc biệt và là thứ mình thích nhất, 
nó cho phép bạn có document luôn chuẩn, có unittest ngay tại chỗ. 

![Rust doc](/media/2021/11/duyet-rust-doc.png)


Một điều nữa là hệ thống document cực kỳ chất lượng của Rust, từ official đến các thư viện. 
Ban đầu mình chỉ cần đọc The Book (https://doc.rust-lang.org/book/) vì mọi thứ đều được giải thích rõ ràng chi tiết.


# Rust Tools và Frameworks cho Big Data và Parallel Processing

Mặc dù có ít thư viện, Rust vẫn có nhiều crate và tool để giải quyết các vấn đề cơ bản và phổ biến: 

- `vector`: High-performance, end-to-end (agent & aggregator) observability data pipeline, by Datadog. Tham khảo: https://vector.dev
- `polars`: Blazingly fast DataFrames in Rust. Tham khảo: https://github.com/pola-rs/polars 
- `serde`: là một crate giúp serialization và de-serialization Rust structures
- `rayon`: program parallel computations, perform sequential calculations, provide a data-race free solution.
- `tokio` là một event-driven, non-blocking I/O platform để viết các ứng dụng network asynchronous trên Rust. Tham khảo: [https://tokio.rs](https://tokio.rs/)
- `diese`: safe, extensible ORM and Query Builder. Tham khảo: [https://diesel.rs](https://diesel.rs/)
- `regex`: Tham khảo https://lib.rs/crates/regex
- `DataFusion` extensible query execution framework, sử dụng [Apache Arrow](https://arrow.apache.org/) như là một in-memory format. DataFusion hỗ trợ cả SQL và DataFrame API để build logical query plans cũng như là query optimizer, parallel execution dựa trên partitioned data sources (CSV and Parquet). Tham khảo: [https://github.com/apache/arrow-datafusion](https://github.com/apache/arrow-datafusion), [arrow-rs](https://github.com/apache/arrow-rs)
- `Ballista` theo mình tìm hiểu sơ là một Distributed Scheduler cho Apache Arrow và DataFusion. Chạy được trên Docker và Kubernetes như một Ballista cluster.
- [Timely dataflow](https://github.com/TimelyDataflow/timely-dataflow): low-latency cyclic dataflow computational model, được giới thiệu trong paper [Naiad: a timely dataflow system](http://dl.acm.org/citation.cfm?id=2522738). Project này mục đích để xây dựng một distributed data-parallel compute engine, có thể scale 1 chương trình từ single thread trên laptop cho đến phân tán trên một cụm rất lớn gồm nhiều máy tính.


# Pain Points

**Steep Learning Curve**: Mặc dù Rust là một ngôn ngữ được yêu thích, tuy nhiên mình cảm nhận nó có syntax khác là 
khó và steep learning curve, có nghĩa là khó có thể nắm bắt được trong thời gian ngắn. 
Học một ngôn ngữ không chỉ là học cú pháp (syntax) của nó. 
Bạn sẽ cần phải học cú pháp phức tạp của Rust, common idioms, macros, cách sử dụng các thư viện phổ biến, các rule về lifetime, ...
Bạn sẽ cần phải mất hàng tuần, hoặc có thể hàng tháng trời, nếu rèn luyện thường xuyên. 
Các ngôn ngữ như Python, Go, ... bạn sẽ thấy productive ngay từ ngày đầu tiên, nhưng với Rust thì ngược lại, 
nó sẽ khiến tốc độ của bạn chậm lại đáng kể, dễ dàng làm nản lòng bất kỳ ai.
Dễ hiểu vì sao Rust vẫn chưa lọt vào top 10 ngôn ngữ phổ biến. 

**WTF `From`, `TryFrom`, `AsRef`, `Arc`, `Pin`, `Feature`, `Rc`, ...**: Bạn sẽ bị choáng ngợp bởi nhiều khái niệm cần phải biết, 
có rất nhiều phương thức quen thuộc mà bạn sẽ bắt gặp trong các project Rust: `.into()`, `.unwrap()`, `.from()`, ...
Một điều nữa là bạn cần phải quan tâm nhiều hơn đến các khái niệm cơ bản của máy tính, bộ nhớ, ... như Heap hay Stack. 
Nhưng một khi bạn đã quen thuộc (với những kiến thức đã lãng quên), chắc chắn bạn sẽ tự tin và xịn hơn bao giờ hết. 

![](/media/2022/01/duyet-rust-pain-point.png)

Rust được thiết kế để giải quyết vài vấn đề rất khó trong lập trình bởi vì 
concept khác biệt và giải quyết chúng cũng bằng một cách rất khác.

Rust tương đối mới nên có **số lượng libraries ít hơn** đáng kể so với Python. 
Vì thế nếu sử dụng ta phải viết lại 1 lượng lớn codebases from scratch. 
Cho nên đối với lập trình viên có ít background về low-level programming, sử dụng Rust cũng sẽ là một thử thách.

Mình nghĩ, mặc dù đã có nhiều bài viết về việc các data engineer, 
[data analyst](https://datacrayon.com/shop/product/data-analysis-with-rust-notebooks/) và 
[data scientist](https://www.nature.com/articles/d41586-020-03382-2) đang dần 
chú ý tới Rust, nhưng vẫn rất khó để Rust có thể thay thế được Python.


# References

- StackOverflow: [Most loved, dreaded, and wanted](https://insights.stackoverflow.com/survey/2021#technology-most-loved-dreaded-and-wanted)
- [Rust Is The Future of JavaScript Infrastructure](https://leerob.io/blog/rust)
- [Rust vs Go](https://bitfieldconsulting.com/golang/rust-vs-go)
- [I wrote one of the fastest DataFrame libraries](https://www.ritchievink.com/blog/2021/02/28/i-wrote-one-of-the-fastest-dataframe-libraries/)
- [Why scientists are turning to Rust](https://www.nature.com/articles/d41586-020-03382-2)
- [Rust is for Big Data (#rust2018)](https://andygrove.io/2018/01/rust-is-for-big-data/)
- https://lib.rs
