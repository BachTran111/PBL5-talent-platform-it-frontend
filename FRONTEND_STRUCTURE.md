# Cau truc thu muc Frontend

Tai lieu nay mo ta cau truc thu muc cua ung dung Frontend. Du an duoc xay dung bang React, TypeScript va Vite, su dung React Router cho dieu huong, Axios de goi API, Zustand de quan ly state, Zod/React Hook Form de validate form, Tailwind/shadcn cho giao dien.

## 1. Tong quan thu muc

```txt
Frontend/
├─ public/
├─ src/
│  ├─ @types/
│  ├─ api/
│  ├─ assets/
│  ├─ components/
│  ├─ config/
│  ├─ data/
│  ├─ hooks/
│  ├─ lib/
│  ├─ pages/
│  ├─ routes/
│  ├─ services/
│  ├─ store/
│  ├─ themes/
│  ├─ types/
│  ├─ utils/
│  └─ validators/
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.ts
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ eslint.config.js
├─ components.json
├─ README.md
└─ FRONTEND_STRUCTURE.md
```

## 2. Cac file cau hinh o thu muc goc

```txt
Frontend/
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.ts
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ eslint.config.js
├─ components.json
├─ README.md
├─ .env
├─ .editorconfig
├─ .gitignore
├─ .prettierrc
└─ .prettierignore
```

- `index.html`: File HTML goc cua ung dung. React se mount vao phan tu co id la `root`.
- `package.json`: Khai bao thong tin du an, scripts va cac thu vien phu thuoc. Cac script chinh gom `dev`, `build`, `lint`, `preview`, `prettier`.
- `package-lock.json`: Khoa phien ban chinh xac cua cac package da cai dat, giup moi moi truong cai dat dependency giong nhau.
- `vite.config.ts`: Cau hinh Vite, plugin React, Tailwind va alias import.
- `tsconfig.json`: Cau hinh TypeScript tong.
- `tsconfig.app.json`: Cau hinh TypeScript danh cho source code cua ung dung.
- `tsconfig.node.json`: Cau hinh TypeScript danh cho cac file chay tren Node.js, vi du `vite.config.ts`.
- `eslint.config.js`: Cau hinh ESLint de kiem tra loi code va style code.
- `components.json`: Cau hinh cho shadcn/ui, gom alias, style va vi tri component UI.
- `README.md`: Tai lieu gioi thieu du an.
- `.env`: Noi khai bao bien moi truong cua frontend.
- `.editorconfig`: Dong bo cau hinh editor nhu indent, charset, end of line.
- `.gitignore`: Khai bao file hoac thu muc khong dua len Git.
- `.prettierrc`: Cau hinh Prettier de format code.
- `.prettierignore`: Khai bao file hoac thu muc bo qua khi chay Prettier.

## 3. Public assets

```txt
public/
└─ vite.svg
```

- `public/vite.svg`: Asset public mac dinh cua Vite. Cac file trong `public` co the duoc truy cap truc tiep tu browser.

## 4. Entry point va file chinh trong src

```txt
src/
├─ main.tsx
├─ App.tsx
├─ App.css
└─ index.css
```

- `main.tsx`: Diem bat dau cua ung dung React. File nay render component `App` vao `#root` trong `index.html`.
- `App.tsx`: Component goc cua ung dung. File nay boc ung dung bang `BrowserRouter`, render `AppRoutes`, xu ly chuyen hash URL va hien/gan widget chatbot theo tung route.
- `App.css`: CSS rieng cho component `App`.
- `index.css`: CSS global cua toan bo ung dung, thuong dung de import Tailwind va khai bao style chung.

## 5. Thu muc routes

```txt
src/routes/
├─ AppRoutes.tsx
└─ ProtectedRoute.tsx
```

- `AppRoutes.tsx`: Khai bao tat ca route cua ung dung, bao gom trang chu, danh sach viec lam, chi tiet viec lam, dang nhap, dang ky, seeker dashboard, employer dashboard, chat va chatbot.
- `ProtectedRoute.tsx`: Component bao ve route. File nay kiem tra nguoi dung da dang nhap chua va role co duoc phep truy cap route hay khong.

## 6. Thu muc pages

```txt
src/pages/
├─ HomePage.tsx
├─ BrowseJobsPage.tsx
├─ JobDetailPage.tsx
├─ NotFoundPage.tsx
├─ admin/
├─ auth/
├─ chat/
├─ ChatPage/
├─ chatbot/
├─ employer/
└─ seeker/
```

- `HomePage.tsx`: Trang chu cua website tuyen dung.
- `BrowseJobsPage.tsx`: Trang hien thi danh sach viec lam, tim kiem va loc viec lam.
- `JobDetailPage.tsx`: Trang hien thi chi tiet mot cong viec.
- `NotFoundPage.tsx`: Trang hien thi khi duong dan khong ton tai.

### pages/auth

```txt
src/pages/auth/
├─ LoginPage.tsx
├─ RegisterPage.tsx
├─ ForgotPasswordPage.tsx
├─ ResetPasswordPage.tsx
├─ GoogleCallback.tsx
└─ SocialCallback.tsx
```

- `LoginPage.tsx`: Trang dang nhap.
- `RegisterPage.tsx`: Trang dang ky tai khoan.
- `ForgotPasswordPage.tsx`: Trang gui yeu cau quen mat khau.
- `ResetPasswordPage.tsx`: Trang dat lai mat khau moi.
- `GoogleCallback.tsx`: Xu ly callback sau khi dang nhap bang Google.
- `SocialCallback.tsx`: Xu ly callback chung cho cac nha cung cap dang nhap social.

### pages/employer

```txt
src/pages/employer/
├─ Dashboard.tsx
├─ OverviewPage.tsx
├─ JobsPage.tsx
├─ CreateJobPage.tsx
├─ CandidatesPage.tsx
├─ InterviewsPage.tsx
└─ CreateInterviewPage.tsx
```

- `Dashboard.tsx`: Layout chinh cho khu vuc nha tuyen dung.
- `OverviewPage.tsx`: Trang tong quan, thong ke nhanh cua nha tuyen dung.
- `JobsPage.tsx`: Trang quan ly danh sach tin tuyen dung.
- `CreateJobPage.tsx`: Trang tao tin tuyen dung moi.
- `CandidatesPage.tsx`: Trang quan ly ung vien.
- `InterviewsPage.tsx`: Trang quan ly lich phong van.
- `CreateInterviewPage.tsx`: Trang tao lich phong van moi.

### pages/seeker

```txt
src/pages/seeker/
└─ Dashboard.tsx
```

- `Dashboard.tsx`: Dashboard danh cho ung vien.

### pages/chat va pages/chatbot

```txt
src/pages/chat/
└─ ChatPage.tsx

src/pages/ChatPage/
└─ ChatPage.tsx

src/pages/chatbot/
└─ ChatbotPage.tsx
```

- `pages/chat/ChatPage.tsx`: Trang chat chinh.
- `pages/ChatPage/ChatPage.tsx`: Mot file chat page khac, co the la phien ban cu hoac dang thu nghiem.
- `pages/chatbot/ChatbotPage.tsx`: Trang chatbot full-screen.

### pages/admin

```txt
src/pages/admin/
└─ Dashboard.tsx
```

- `Dashboard.tsx`: Dashboard danh cho admin.

## 7. Thu muc components

```txt
src/components/
├─ login-form.tsx
├─ signup-form.tsx
├─ ui/
├─ layout/
├─ sections/
├─ browse-jobs/
├─ job-detail/
├─ employer/
├─ chat/
└─ chatbot/
```

- `login-form.tsx`: Component form dang nhap.
- `signup-form.tsx`: Component form dang ky.

### components/ui

```txt
src/components/ui/
├─ alert.tsx
├─ Badge.tsx
├─ button.tsx
├─ Buttons.tsx
├─ card.tsx
├─ CategoryCard.tsx
├─ Container.tsx
├─ field.tsx
├─ input.tsx
├─ JobCard.tsx
├─ label.tsx
├─ Logo.tsx
├─ navigation-menu.tsx
├─ SectionHeading.tsx
├─ separator.tsx
└─ Tag.tsx
```

- `alert.tsx`: Component hien thi thong bao/canh bao.
- `Badge.tsx`: Component nhan nho de hien thi trang thai hoac loai thong tin.
- `button.tsx`: Button theo style shadcn/ui.
- `Buttons.tsx`: Tap hop hoac bien the button rieng cua du an.
- `card.tsx`: Component card dung de boc noi dung.
- `CategoryCard.tsx`: Card hien thi danh muc cong viec.
- `Container.tsx`: Component gioi han chieu rong noi dung theo layout chung.
- `field.tsx`: Component truong form.
- `input.tsx`: Component input theo style UI.
- `JobCard.tsx`: Card hien thi thong tin viec lam dung lai o nhieu noi.
- `label.tsx`: Component label cho form.
- `Logo.tsx`: Component logo cua ung dung.
- `navigation-menu.tsx`: Component menu dieu huong.
- `SectionHeading.tsx`: Tieu de dung cho cac section.
- `separator.tsx`: Duong phan cach UI.
- `Tag.tsx`: Component tag nho dung cho keyword, skill hoac category.

### components/layout

```txt
src/components/layout/
├─ AuthFooter.tsx
├─ Footer.tsx
├─ Header.tsx
├─ MainLayout.tsx
└─ Navbar.tsx
```

- `AuthFooter.tsx`: Footer rieng cho cac trang xac thuc nhu login/register.
- `Footer.tsx`: Footer chinh cua website.
- `Header.tsx`: Header chung cua ung dung.
- `MainLayout.tsx`: Layout boc cac trang public, thuong gom header/navbar, outlet va footer.
- `Navbar.tsx`: Thanh dieu huong chinh.

### components/sections

```txt
src/components/sections/
├─ CategoriesSection.tsx
├─ EmployersSection.tsx
├─ FeaturedJobsSection.tsx
├─ HeroSection.tsx
└─ NewsletterSection.tsx
```

- `HeroSection.tsx`: Phan hero dau trang chu.
- `FeaturedJobsSection.tsx`: Phan viec lam noi bat.
- `CategoriesSection.tsx`: Phan danh muc viec lam.
- `EmployersSection.tsx`: Phan nha tuyen dung/noi lam viec noi bat.
- `NewsletterSection.tsx`: Phan dang ky nhan tin hoac cap nhat.

### components/browse-jobs

```txt
src/components/browse-jobs/
├─ ActiveFiltersBar.tsx
├─ CareerTipsCard.tsx
├─ CheckboxFilterItem.tsx
├─ EmptyState.tsx
├─ FiltersSidebar.tsx
├─ FilterSelectGroup.tsx
├─ FilterSection.tsx
├─ JobAlertsCard.tsx
├─ JobCard.tsx
├─ JobsListHeader.tsx
├─ JobsSearchBar.tsx
├─ JobsTopHeader.tsx
├─ Pagination.tsx
├─ SalaryRangeSlider.tsx
├─ SkeletonJobCard.tsx
├─ TopCompaniesCard.tsx
└─ WorkTypeChips.tsx
```

- `ActiveFiltersBar.tsx`: Hien thi cac bo loc dang duoc ap dung.
- `CareerTipsCard.tsx`: Card hien thi meo nghe nghiep.
- `CheckboxFilterItem.tsx`: Item checkbox trong bo loc.
- `EmptyState.tsx`: Giao dien khi khong co ket qua viec lam.
- `FiltersSidebar.tsx`: Sidebar chua cac bo loc viec lam.
- `FilterSelectGroup.tsx`: Nhom select cho bo loc.
- `FilterSection.tsx`: Section rieng trong sidebar filter.
- `JobAlertsCard.tsx`: Card goi y bat thong bao viec lam.
- `JobCard.tsx`: Card hien thi mot viec lam trong trang browse jobs.
- `JobsListHeader.tsx`: Header cua danh sach viec lam, co the gom sort/count.
- `JobsSearchBar.tsx`: Thanh tim kiem viec lam.
- `JobsTopHeader.tsx`: Header phia tren trang danh sach viec lam.
- `Pagination.tsx`: Phan trang danh sach viec lam.
- `SalaryRangeSlider.tsx`: Slider loc theo muc luong.
- `SkeletonJobCard.tsx`: Loading skeleton cho job card.
- `TopCompaniesCard.tsx`: Card hien thi cong ty noi bat.
- `WorkTypeChips.tsx`: Cac chip loc theo hinh thuc lam viec.

### components/job-detail

```txt
src/components/job-detail/
├─ JobActionsCard.tsx
├─ JobCompanyCard.tsx
├─ JobDetailHeader.tsx
├─ JobDetailSkeleton.tsx
├─ JobDetailState.tsx
├─ JobDetailTabs.tsx
└─ SimilarJobsList.tsx
```

- `JobActionsCard.tsx`: Card chua cac hanh dong nhu ung tuyen, luu viec.
- `JobCompanyCard.tsx`: Card hien thi thong tin cong ty.
- `JobDetailHeader.tsx`: Header trang chi tiet viec lam.
- `JobDetailSkeleton.tsx`: Loading skeleton khi dang tai chi tiet viec.
- `JobDetailState.tsx`: Xu ly cac trang thai cua trang chi tiet, vi du loading, error, empty.
- `JobDetailTabs.tsx`: Tabs noi dung chi tiet viec lam.
- `SimilarJobsList.tsx`: Danh sach viec lam tuong tu.

### components/employer

```txt
src/components/employer/
├─ CreateInterviewScheduleForm.tsx
├─ CreateJobForm.tsx
├─ EmployeeHeader.tsx
├─ EmployeeSidebar.tsx
├─ EmployerCandidateList.tsx
├─ EmployerEmptyState.tsx
├─ EmployerInterviewList.tsx
├─ EmployerJobList.tsx
├─ EmployerPageHeader.tsx
├─ EmployerSectionCard.tsx
├─ EmployerShell.tsx
├─ EmployerStatCard.tsx
├─ EmployerWorkspaceContext.tsx
├─ ScheduleInterviewForm.tsx
├─ ViewCandidateModal.tsx
├─ ViewInterviewModal.tsx
└─ ViewJobModal.tsx
```

- `CreateInterviewScheduleForm.tsx`: Form tao lich phong van.
- `CreateJobForm.tsx`: Form tao tin tuyen dung.
- `EmployeeHeader.tsx`: Header trong khu vuc employer/employee.
- `EmployeeSidebar.tsx`: Sidebar dieu huong cho employer.
- `EmployerCandidateList.tsx`: Danh sach ung vien.
- `EmployerEmptyState.tsx`: Trang thai rong khi khong co du lieu.
- `EmployerInterviewList.tsx`: Danh sach lich phong van.
- `EmployerJobList.tsx`: Danh sach job cua nha tuyen dung.
- `EmployerPageHeader.tsx`: Header dung chung cho cac trang employer.
- `EmployerSectionCard.tsx`: Card section dung trong dashboard employer.
- `EmployerShell.tsx`: Khung layout chinh cua khu vuc employer.
- `EmployerStatCard.tsx`: Card thong ke.
- `EmployerWorkspaceContext.tsx`: Context chia se du lieu/trang thai trong workspace employer.
- `ScheduleInterviewForm.tsx`: Form len lich phong van.
- `ViewCandidateModal.tsx`: Modal xem chi tiet ung vien.
- `ViewInterviewModal.tsx`: Modal xem chi tiet lich phong van.
- `ViewJobModal.tsx`: Modal xem chi tiet tin tuyen dung.

### components/chat

```txt
src/components/chat/
├─ ChatFullPage.tsx
├─ ChatHeader.tsx
├─ ChatInput.tsx
├─ ChatMessageBubble.tsx
├─ ChatMessageList.tsx
├─ ChatSidebar.tsx
├─ ChatWidget.tsx
└─ ChatWidgetToggle.tsx
```

- `ChatFullPage.tsx`: Giao dien chat dang trang day du.
- `ChatHeader.tsx`: Header cua khung chat.
- `ChatInput.tsx`: O nhap tin nhan.
- `ChatMessageBubble.tsx`: Bong tin nhan don le.
- `ChatMessageList.tsx`: Danh sach tin nhan.
- `ChatSidebar.tsx`: Sidebar danh sach hoi thoai hoac thong tin lien quan.
- `ChatWidget.tsx`: Widget chat noi tren man hinh.
- `ChatWidgetToggle.tsx`: Nut bat/tat widget chat.

### components/chatbot

```txt
src/components/chatbot/
├─ ChatbotFullPage.tsx
├─ ChatbotHeader.tsx
├─ ChatbotInput.tsx
├─ ChatbotMessageBubble.tsx
├─ ChatbotMessageList.tsx
├─ ChatbotSidebar.tsx
├─ ChatbotSuggestions.tsx
├─ ChatbotWidget.tsx
└─ ChatbotWidgetToggle.tsx
```

- `ChatbotFullPage.tsx`: Giao dien chatbot full-screen.
- `ChatbotHeader.tsx`: Header cua khung chatbot.
- `ChatbotInput.tsx`: O nhap cau hoi cho chatbot.
- `ChatbotMessageBubble.tsx`: Bong tin nhan cua user/bot.
- `ChatbotMessageList.tsx`: Danh sach tin nhan chatbot.
- `ChatbotSidebar.tsx`: Sidebar cua chatbot, co the hien thi lich su hoi thoai.
- `ChatbotSuggestions.tsx`: Cac goi y cau hoi nhanh.
- `ChatbotWidget.tsx`: Widget chatbot noi trong ung dung.
- `ChatbotWidgetToggle.tsx`: Nut bat/tat widget chatbot.

## 8. Thu muc api

```txt
src/api/
├─ axiosInstance.ts
├─ auth.ts
├─ bookmarks.ts
├─ browseJobs.ts
├─ chat.ts
├─ chatbot.ts
├─ employer.ts
├─ index.ts
├─ jobs.ts
├─ mockEmployerData.ts
└─ user.ts
```

- `axiosInstance.ts`: Cau hinh Axios dung chung, vi du base URL, header, token va interceptor.
- `auth.ts`: Cac API lien quan den dang nhap, dang ky, quen mat khau, reset mat khau, OAuth.
- `bookmarks.ts`: API luu va bo luu viec lam.
- `browseJobs.ts`: API lay danh sach viec lam, tim kiem, loc va phan trang.
- `chat.ts`: API lien quan den tinh nang chat.
- `chatbot.ts`: API lien quan den chatbot.
- `employer.ts`: API danh cho nha tuyen dung, nhu job, ung vien, phong van.
- `index.ts`: File gom va export lai cac API.
- `jobs.ts`: API lien quan den viec lam.
- `mockEmployerData.ts`: Du lieu gia lap cho khu vuc employer.
- `user.ts`: API lien quan den thong tin nguoi dung.

## 9. Thu muc store

```txt
src/store/
├─ authStore.ts
├─ browseJobsStore.ts
├─ chatStore.ts
└─ chatbotStore.ts
```

- `authStore.ts`: Quan ly state dang nhap, nguoi dung hien tai, token va trang thai auth.
- `browseJobsStore.ts`: Quan ly state cua trang danh sach viec lam, nhu filter, search, sort, pagination.
- `chatStore.ts`: Quan ly state cua tinh nang chat.
- `chatbotStore.ts`: Quan ly state cua chatbot.

## 10. Thu muc hooks

```txt
src/hooks/
├─ useAuth.ts
├─ useAutoScroll.ts
├─ useBrowseJobs.ts
├─ useChat.ts
├─ useChatbot.ts
├─ useChatWebSocket.ts
├─ useDebounce.ts
├─ useEmployerData.ts
├─ useJobDetail.ts
└─ useToggle.ts
```

- `useAuth.ts`: Hook xu ly logic xac thuc nguoi dung.
- `useAutoScroll.ts`: Hook tu dong scroll xuong cuoi, thuong dung trong khung chat.
- `useBrowseJobs.ts`: Hook xu ly logic lay va loc danh sach viec lam.
- `useChat.ts`: Hook xu ly logic chat.
- `useChatbot.ts`: Hook xu ly logic chatbot.
- `useChatWebSocket.ts`: Hook ket noi va lang nghe WebSocket cho chat.
- `useDebounce.ts`: Hook tri hoan cap nhat gia tri, thuong dung cho search input.
- `useEmployerData.ts`: Hook lay va xu ly du lieu employer.
- `useJobDetail.ts`: Hook lay chi tiet viec lam.
- `useToggle.ts`: Hook bat/tat gia tri boolean.

## 11. Thu muc services

```txt
src/services/
└─ websocket/
   ├─ chatWebSocket.ts
   └─ index.ts
```

- `chatWebSocket.ts`: Xu ly ket noi WebSocket/socket.io cho tinh nang chat realtime.
- `index.ts`: Export cac service websocket.

## 12. Thu muc validators

```txt
src/validators/
├─ index.ts
├─ loginSchema.ts
└─ registerSchema.ts
```

- `loginSchema.ts`: Schema validate form dang nhap.
- `registerSchema.ts`: Schema validate form dang ky.
- `index.ts`: Export cac schema de import gon hon.

## 13. Thu muc utils va lib

```txt
src/utils/
├─ errorHandler.ts
├─ jobDetail.ts
├─ messageCache.ts
└─ token.ts

src/lib/
└─ utils.ts
```

- `errorHandler.ts`: Xu ly va chuan hoa loi tu API.
- `jobDetail.ts`: Cac ham tien ich lien quan den chi tiet viec lam.
- `messageCache.ts`: Xu ly cache tin nhan chat/chatbot.
- `token.ts`: Xu ly token, vi du lay, luu, xoa token.
- `lib/utils.ts`: Ham tien ich dung chung, thuong co ham gop class CSS nhu `cn`.

## 14. Thu muc types va @types

```txt
src/types/
├─ browse-jobs.ts
├─ index.ts
└─ job-detail.ts

src/@types/
├─ auth.ts
├─ chat.ts
├─ chatbot.ts
├─ employee.ts
├─ employer.ts
└─ user.ts
```

- `types/browse-jobs.ts`: Type lien quan den trang danh sach viec lam.
- `types/job-detail.ts`: Type lien quan den chi tiet viec lam.
- `types/index.ts`: Export cac type chung.
- `@types/auth.ts`: Type lien quan den dang nhap, dang ky va auth.
- `@types/chat.ts`: Type lien quan den chat.
- `@types/chatbot.ts`: Type lien quan den chatbot.
- `@types/employee.ts`: Type lien quan den employee.
- `@types/employer.ts`: Type lien quan den employer.
- `@types/user.ts`: Type lien quan den nguoi dung.

## 15. Thu muc data

```txt
src/data/
├─ categories.ts
├─ employers.ts
├─ footer.ts
├─ jobs.ts
└─ browse-jobs/
   ├─ companies.ts
   ├─ filters.ts
   └─ jobs.ts
```

- `categories.ts`: Du lieu danh muc cong viec.
- `employers.ts`: Du lieu nha tuyen dung/cong ty.
- `footer.ts`: Du lieu hien thi o footer.
- `jobs.ts`: Du lieu viec lam mau hoac noi bat.
- `browse-jobs/companies.ts`: Du lieu cong ty trong trang browse jobs.
- `browse-jobs/filters.ts`: Cau hinh cac bo loc viec lam.
- `browse-jobs/jobs.ts`: Du lieu viec lam cho trang browse jobs.

## 16. Thu muc themes va config

```txt
src/themes/
├─ shadui.config.ts
└─ tailwind.css

src/config/
└─ google.config.ts
```

- `themes/shadui.config.ts`: Cau hinh theme hoac UI config lien quan den shadcn.
- `themes/tailwind.css`: File style/theme Tailwind.
- `config/google.config.ts`: Cau hinh dang nhap Google/OAuth.

## 17. Thu muc assets

```txt
src/assets/
└─ react.svg
```

- `react.svg`: Asset SVG mac dinh cua React/Vite.

## 18. Luan chuyen chinh cua ung dung

```txt
index.html
  -> src/main.tsx
    -> src/App.tsx
      -> src/routes/AppRoutes.tsx
        -> src/pages/*
          -> src/components/*
            -> src/hooks/*
            -> src/store/*
            -> src/api/*
```

Giai thich ngan gon:

- `index.html` tao vung mount cho React.
- `main.tsx` khoi tao React app.
- `App.tsx` boc ung dung bang router va cac thanh phan global.
- `AppRoutes.tsx` quyet dinh URL nao se hien thi page nao.
- `pages` la cac man hinh lon.
- `components` la cac thanh phan giao dien co the tai su dung.
- `hooks`, `store`, `api`, `utils` ho tro logic, state va giao tiep backend.

## 19. Ghi chu

- `node_modules/`: Thu muc chua thu vien npm da cai dat, khong can dua vao bao cao cau truc.
- `dist/`: Thu muc build sau khi chay `npm run build`, khong phai source code chinh.
- `.git/`: Thu muc quan ly Git, khong can dua vao mo ta frontend.
