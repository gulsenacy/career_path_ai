# CareerPath AI — Data Model

## 1. Genel Yaklaşım

CareerPath AI uygulamasında sistemin merkezinde kullanıcı yer alır. Kullanıcının hedefleri, görevleri, günlük gelişim kayıtları ve ilerleyen aşamalarda değerlendirme sonuçları ile AI önerileri kullanıcıya bağlı olarak tutulacaktır.

İlk MVP aşamasında temel sistemin oturması için öncelik şu tablolara verilecektir:

* Users
* Goals
* Tasks
* DailyLogs

Assessment ve AI öneri modülleri temel kullanıcı, hedef, görev ve günlük kayıt yapısı tamamlandıktan sonra eklenecektir.

---

## 2. Temel Veri İlişkisi

```text
User
 ├── Goals
 │    └── Tasks
 ├── Tasks
 └── DailyLogs
```

Bir kullanıcının birden fazla hedefi olabilir.
Bir hedefin birden fazla görevi olabilir.
Bir kullanıcının hedefe bağlı olmayan genel görevleri de olabilir.
Bir kullanıcının birden fazla günlük gelişim kaydı olabilir.

---

## 3. Users

Kullanıcı bilgilerini tutar.

### Alanlar

```text
Id
FullName
Email
PasswordHash
CreatedAt
```

### Açıklama

Bu tablo, sistemdeki kullanıcıları temsil eder. Her hedef, görev ve günlük kayıt bir kullanıcıya bağlı olacaktır. Böylece kullanıcılar yalnızca kendi verilerini görebilecektir.

---

## 4. Goals

Kullanıcının gelişim hedeflerini tutar.

### Alanlar

```text
Id
UserId
Title
Description
Category
Status
TargetDate
Progress
CreatedAt
UpdatedAt
```

### Açıklama

Bu tablo kullanıcının kariyer ve gelişim hedeflerini saklar. Örneğin React öğrenmek, SQL pratiği yapmak veya backend temellerini geliştirmek birer hedef olabilir.

### İlişki

```text
User 1 ─── N Goals
```

Bir kullanıcının birden fazla hedefi olabilir.

---

## 5. Tasks

Kullanıcının görevlerini tutar.

### Alanlar

```text
Id
UserId
GoalId
Title
Description
Status
Priority
DueDate
CompletedAt
CreatedAt
```

### Açıklama

Bu tablo hedeflere bağlı veya bağımsız görevleri tutar. `GoalId` boş olabilir. Böylece bazı görevler doğrudan bir hedefe bağlı olurken bazı görevler genel görev olarak tutulabilir.

### İlişki

```text
User 1 ─── N Tasks
Goal 1 ─── N Tasks
```

Bir kullanıcının birden fazla görevi olabilir.
Bir hedefin birden fazla görevi olabilir.

---

## 6. DailyLogs

Kullanıcının günlük gelişim veya staj kayıtlarını tutar.

### Alanlar

```text
Id
UserId
LogDate
WorkedOn
Learned
Problems
Solutions
NextStep
TimeSpentMinutes
CreatedAt
```

### Açıklama

Bu tablo, kullanıcının gün içinde ne üzerinde çalıştığını, ne öğrendiğini, hangi problemlerle karşılaştığını ve sonraki adımını kaydetmesini sağlar. Bu yapı staj defteri mantığına da uygundur.

### İlişki

```text
User 1 ─── N DailyLogs
```

Bir kullanıcının birden fazla günlük kaydı olabilir.

---

## 7. Dashboard Verileri

Dashboard için ayrı bir tablo oluşturulmayacaktır. Dashboard ekranındaki bilgiler diğer tablolardan hesaplanacaktır.

```text
Active Goals      → Goals tablosundan
Completed Tasks   → Tasks tablosundan
Daily Logs        → DailyLogs tablosundan
Upcoming Tasks    → Tasks tablosundan
```

İlerleyen aşamada assessment ve AI modülleri eklendiğinde dashboard şu verileri de gösterebilir:

```text
Assessment Score      → AssessmentAttempts tablosundan
Category Performance  → Assessment sonuçlarından
AI Growth Insight     → AIRecommendations tablosundan
```

---

## 8. Sonraki Aşamada Eklenecek Tablolar

Temel sistem tamamlandıktan sonra şu tablolar eklenebilir:

```text
AssessmentCategories
Questions
AnswerOptions
AssessmentAttempts
UserAnswers
AIRecommendations
```

Bu tablolar ilk aşamada oluşturulmayacaktır. Önce kullanıcı, hedef, görev ve günlük kayıt akışı tamamlanacaktır.

---

## 9. İlk Backend Geliştirme Sırası

İlk backend geliştirme aşamasında şu sırayla ilerlenmesi planlanmaktadır:

```text
1. Entity Framework Core kurulumu
2. SQL Server bağlantısı
3. AppDbContext oluşturulması
4. User entity oluşturulması
5. Goal entity oluşturulması
6. TaskItem entity oluşturulması
7. DailyLog entity oluşturulması
8. İlk migration ile tabloların oluşturulması
```

Bu yapı tamamlandıktan sonra kullanıcı kayıt/giriş sistemi, hedef takibi, görev takibi ve günlük kayıt modülleri API endpointleri üzerinden geliştirilecektir.
