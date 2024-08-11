"use client";
import React from "react";
import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//TODO: Implement contribute functionality as mentioned in /Contribute/Page.tsx file
// and align conribute button here properly with dedicated spot near FAQ search bar.

export default function Component() {
  interface FAQItem {
    question: string;
    answer: string;
  }

  const faqs: FAQItem[] = [
    {
      question: "What are the hostel facilities like?",
      answer:
        "MNNIT Allahabad offers various hostel facilities for both boys and girls. The hostels are equipped with essential amenities like furnished rooms, mess facilities, common rooms, and Wi-Fi. Freshers usually stay in designated first-year hostels. Each hostel has a warden and other support staff to assist with any issues.",
    },
    {
      question:
        "What is the process for getting my ID card and registration number?",
      answer:
        "Upon joining, students need to complete the registration process, which includes submitting required documents and fees. The ID card and registration number are typically issued shortly after the completion of these formalities. The ID card serves as a proof of identity within the campus and is required for access to various facilities.",
    },
    {
      question: "What are the academic programs and their structure?",
      answer:
        "MNNIT Allahabad offers a variety of undergraduate, postgraduate, and doctoral programs in engineering, science, and management. The academic structure includes lectures, tutorials, lab sessions, and project work. The curriculum is divided into semesters, with evaluations based on exams, assignments, and practicals.",
    },
    {
      question: "What extracurricular activities and clubs can I join?",
      answer:
        "MNNIT Allahabad has a vibrant student community with numerous clubs and societies, including the Computer Coding Club, Robotics Club, Aeroclub, Astro Club, SAE, Rotaract Club, dramatics, music, dance, and more. Students are encouraged to participate in these clubs to explore their interests and develop new skills.",
    },
    {
      question: "How is the campus safety and security?",
      answer:
        "The campus has a dedicated security team that ensures the safety of students and staff. Entry and exit points are monitored, and security personnel patrol the campus regularly. There are also strict regulations in place regarding visitors and outsiders entering the campus.",
    },
    {
      question: "What is the procedure for fee payment and scholarships?",
      answer:
        "Fees can be paid online through the institute's portal or at designated bank counters. MNNIT Allahabad offers various scholarships based on merit, economic background, and other criteria. Details about available scholarships and the application process can be found on the official website or through the academic office.",
    },
    {
      question: "What are the dining facilities like on campus?",
      answer:
        "Each hostel has a mess that provides nutritious meals to students. There are also cafeterias and canteens across the campus offering a variety of food options. The mess menu typically includes breakfast, lunch, evening snacks, and dinner, with a mix of vegetarian and non-vegetarian dishes.",
    },
    {
      question: "What are the transport facilities to and from the campus?",
      answer:
        "The campus is well-connected by public transport, including buses and auto-rickshaws. The nearest railway station is Allahabad Junction, and the nearest airport is Bamrauli Airport. The institute may also provide bus services for specific events or trips.",
    },
    {
      question: "How do I access the library and other academic resources?",
      answer:
        "The Central Library at MNNIT Allahabad is a rich resource for books, journals, and digital materials. Students can access the library using their ID cards. There are also online resources and databases available for academic research. Additionally, each department has its own library and lab facilities.",
    },
    {
      question:
        "What is the process for attending classes and maintaining attendance?",
      answer:
        "Attendance is mandatory, and students are required to attend all lectures, tutorials, and lab sessions. The institute has a minimum attendance requirement that must be met to be eligible for exams. Attendance is monitored regularly, and students are advised to adhere to the rules to avoid any academic penalties.",
    },
    {
      question: "What is the academic calendar like?",
      answer:
        "The academic calendar includes important dates such as the start and end of semesters, examination periods, holidays, and other significant academic events. It is published on the institute's website and is also available in the academic office.",
    },
    {
      question: "What are the rules and regulations regarding ragging?",
      answer:
        "MNNIT Allahabad has a strict anti-ragging policy. Ragging is strictly prohibited, and any student found guilty of indulging in it will face severe disciplinary action, which may include suspension or expulsion. The institute provides a helpline and support system for students to report any incidents.",
    },
    {
      question: "How do I get my textbooks and study materials?",
      answer:
        "Textbooks and study materials can be obtained from the campus bookstore, local bookshops, or the Central Library. The library also offers a book bank scheme for students. Some professors may provide notes and materials during lectures or on the institute's online learning platforms.",
    },
    {
      question: "Are there any specific dress codes or uniform requirements?",
      answer:
        "There is no mandatory uniform for students at MNNIT Allahabad. However, students are expected to dress modestly and appropriately, especially during lab sessions or formal events. Specific courses may have their own dress code requirements, such as lab coats for practical classes.",
    },
    {
      question: "What is the procedure for medical emergencies on campus?",
      answer:
        "The institute has a health center equipped to handle medical emergencies. In case of serious issues, students may be referred to nearby hospitals. The health center operates during specific hours, and there are provisions for medical assistance at night and on weekends.",
    },
    {
      question: "How do I access the gym and sports facilities?",
      answer:
        "MNNIT Allahabad offers a variety of sports and fitness facilities, including a gym, sports fields, and courts for various games. Students can access these facilities by registering with the sports office. The gym has specific hours of operation, and certain sports facilities may require prior booking.",
    },
    {
      question:
        "What is the procedure for applying for internships and placements?",
      answer:
        "The Training and Placement Cell (T&P) at MNNIT Allahabad facilitates internships and placements. Students are required to register with the T&P Cell and participate in workshops, pre-placement talks, and placement drives. The T&P Cell provides guidance and resources for resume building, interview preparation, and career counseling.",
    },
    {
      question:
        "Are there any language courses or skill development programs available?",
      answer:
        "The institute occasionally offers language courses and skill development programs. These may include soft skills training, foreign language courses, coding workshops, and more. Such programs are usually announced through the academic office or relevant departments.",
    },
    {
      question: "How do I join a student committee or club?",
      answer:
        "Students can join various committees or clubs by participating in recruitment drives, which are typically held at the beginning of the academic year. Information about the activities and membership criteria of each club is usually communicated through notices, social media, or club members.",
    },
    {
      question: "What are the library timings and borrowing rules?",
      answer:
        "The Central Library at MNNIT Allahabad is open on weekdays and weekends during specific hours. Students can borrow books using their ID cards, with borrowing limits and due dates based on the type of material. The library also offers digital resources and study spaces.",
    },
    {
      question: "Is there an alumni network or mentorship program?",
      answer:
        "MNNIT Allahabad has an active alumni network that offers mentorship and networking opportunities to current students. The institute occasionally organizes alumni meets, workshops, and talks where students can interact with alumni and gain insights into various career paths.",
    },
    {
      question:
        "How do I report maintenance issues in hostels or academic buildings?",
      answer:
        "Maintenance issues can be reported to the hostel warden or the maintenance office. The institute has a system for addressing complaints related to infrastructure, plumbing, electrical issues, and other maintenance needs. Students can also use online portals for reporting and tracking issues.",
    },
    {
      question: "What are the rules for vehicle parking on campus?",
      answer:
        "Students are allowed to bring vehicles to the campus, but they must follow the parking regulations set by the institute. Parking spaces are designated for different types of vehicles, and students must register their vehicles with the security office. Unauthorized parking may result in fines or penalties.",
    },
    {
      question:
        "What opportunities are there for cultural activities and festivals?",
      answer:
        "MNNIT Allahabad hosts various cultural events and festivals throughout the year, including the annual cultural fest, 'Culrav,' and technical fest, 'Avishkar.' Students can participate in or volunteer for events like music, dance, drama, art, and literary competitions. There are also student-run cultural societies and committees.",
    },
    {
      question: "How can I access counseling and mental health services?",
      answer:
        "The institute provides counseling and mental health services through a dedicated counseling center. Students can seek support for academic stress, personal issues, or mental health concerns. The counseling center offers confidential sessions with professional counselors and psychologists.",
    },
    {
      question: "What is the process for attending workshops or seminars?",
      answer:
        "Workshops and seminars are regularly organized by various departments, clubs, and the Training and Placement Cell. Information about these events is usually circulated through official notices, emails, and the institute's website. Students may need to register in advance to attend certain events.",
    },
    {
      question:
        "What are the rules regarding the use of electronic gadgets in classrooms?",
      answer:
        "The use of electronic gadgets like laptops, tablets, and smartphones in classrooms is generally allowed for academic purposes. However, students must adhere to the specific guidelines set by instructors, and the devices should not disrupt the class. Misuse of gadgets can lead to disciplinary action.",
    },
    {
      question: "How do I access the Wi-Fi network on campus?",
      answer:
        "MNNIT Allahabad provides campus-wide Wi-Fi access for students and staff. To connect, students must register their devices with the IT department and follow the provided guidelines for accessing the network. The Wi-Fi is secure and requires authentication to use.",
    },
    {
      question: "What should I do if I lose my ID card?",
      answer:
        "If a student loses their ID card, they should immediately report it to the academic office and apply for a replacement. A nominal fee may be charged for issuing a new card. The lost card will be deactivated to prevent misuse.",
    },
    {
      question: "How can I participate in research projects or assistantships?",
      answer:
        "Students interested in research projects or assistantships can approach faculty members in their respective departments. Opportunities may be available based on ongoing research work, and students can participate as research assistants or interns. The institute also encourages students to publish papers and present at conferences.",
    },
    {
      question: "How do I register for courses each semester?",
      answer:
        "Course registration is done online through the institute's academic portal at the beginning of each semester. Students need to select their courses, including electives and core subjects, within the stipulated time. Guidance is provided by academic advisors to ensure proper course selection.",
    },
    {
      question: "What are the grading and evaluation systems used?",
      answer:
        "MNNIT Allahabad uses a credit-based grading system. Each course has a certain number of credits, and students are evaluated based on continuous assessment (assignments, quizzes, etc.), mid-semester exams, and end-semester exams. The final grade is calculated on a 10-point scale.",
    },
    {
      question: "What is the process for changing branches or majors?",
      answer:
        "Students can apply for a change of branch or major at the end of the first year, based on their academic performance and availability of seats. The institute has specific criteria and procedures for branch change, which are outlined in the academic regulations.",
    },
    {
      question: "Are there any student exchange or study abroad programs?",
      answer:
        "MNNIT Allahabad has partnerships with various international universities and institutes, offering student exchange and study abroad programs. Interested students can apply through the international relations office, which provides guidance on eligibility, application procedures, and available opportunities.",
    },
    {
      question:
        "How can I get involved in student government or leadership roles?",
      answer:
        "Students can get involved in student government by participating in elections for positions in the Student Council or various club and committee leadership roles. Elections are usually held annually, and all students are encouraged to vote and participate. Leadership roles offer a chance to influence campus life and represent student interests.",
    },
    {
      question: "What is the policy on attendance and leave of absence?",
      answer:
        "Attendance is mandatory for all classes, and a minimum attendance percentage is required to be eligible for exams. Students who need to take a leave of absence for medical or personal reasons must apply through the academic office, providing necessary documentation. The leave policy details the process for approval and any potential impact on academics.",
    },
    {
      question: "How do I get involved in research or innovation projects?",
      answer:
        "Students interested in research and innovation can collaborate with faculty members on ongoing projects or initiate their own under faculty supervision. The institute also has dedicated research centers and innovation labs. Students can seek guidance from their department or the research and development cell.",
    },
    {
      question:
        "What are the available dining options on campus besides the mess?",
      answer:
        "In addition to the hostel mess facilities, there are several cafeterias and food stalls across the campus. These offer a variety of food options, including snacks, fast food, beverages, and regional cuisine. The campus also hosts food festivals and special food events.",
    },
    {
      question: "What is the role of the Dean of Students' Welfare?",
      answer:
        "The Dean of Students' Welfare (DSW) is responsible for overseeing student welfare, including accommodation, discipline, and extracurricular activities. The DSW office addresses student grievances, organizes student services, and coordinates various non-academic aspects of student life.",
    },
    {
      question: "What are the procedures for addressing academic grievances?",
      answer:
        "Academic grievances, such as issues with grading, course content, or instructor conduct, can be addressed by first discussing the matter with the concerned faculty member. If unresolved, students can escalate the issue to the department head, the Dean of Academic Affairs, or the grievance redressal committee.",
    },
    {
      question:
        "Are there any special provisions for differently-abled students?",
      answer:
        "MNNIT Allahabad is committed to providing support for differently-abled students. The campus infrastructure includes ramps, elevators, and accessible restrooms. Additionally, the institute offers academic support and accommodations as needed. Students can contact the office of student welfare for specific assistance.",
    },
    {
      question: "How can I participate in sports competitions and events?",
      answer:
        "The institute has a vibrant sports culture, with facilities for various sports like cricket, football, basketball, tennis, badminton, and more. Students can join sports teams, participate in inter-collegiate tournaments, and take part in the annual sports fest, 'Josh.' The sports office provides information on trials and events.",
    },
    {
      question: "What financial aid options are available for students?",
      answer:
        "Financial aid options include scholarships, fellowships, and fee waivers. Scholarships are available based on merit, need, and specific criteria such as minority status or disability. The financial aid office provides information on eligibility and application procedures. Students can also explore external scholarships.",
    },
    {
      question: "What is the process for availing medical insurance?",
      answer:
        "The institute provides medical insurance coverage to all students. The details of the policy, including coverage, claim procedures, and network hospitals, are provided at the time of admission. In case of medical emergencies or treatments, students can claim insurance by submitting the required documents to the insurance office.",
    },
    {
      question:
        "How are parents and guardians kept informed about student progress?",
      answer:
        "Parents and guardians can stay informed about student progress through regular academic reports, which are available on the student portal. The institute also organizes parent-teacher meetings and sends out notices or updates regarding important academic or disciplinary matters.",
    },
    {
      question:
        "What are the facilities for banking and financial transactions on campus?",
      answer:
        "The campus has branches of major banks and ATMs for convenient banking services. Students can open accounts, manage transactions, and use ATM facilities for withdrawals and deposits. The banks also offer facilities for fee payments and other financial services.",
    },
    {
      question:
        "What kind of support is available for career planning and development?",
      answer:
        "The Training and Placement Cell provides comprehensive support for career planning, including career counseling, resume building, interview preparation, and job placement. Workshops, seminars, and mock interviews are conducted to help students prepare for the job market. The T&P Cell also facilitates internships and industrial training.",
    },
    {
      question:
        "How can I get assistance with language and communication skills?",
      answer:
        "The institute offers language and communication skill development programs through workshops, language labs, and courses. These programs are designed to improve English proficiency, public speaking, and writing skills. The language center provides resources and support for non-native speakers as well.",
    },
    {
      question:
        "What are the procedures for withdrawing from a course or the institute?",
      answer:
        "To withdraw from a course or the institute, students must follow the official procedure, which includes submitting a withdrawal application to the academic office. The process involves clearance from various departments, including finance, library, and hostel. The refund of fees, if applicable, is governed by the institute's policies.",
    },
    {
      question:
        "Are there opportunities for entrepreneurship and start-up support?",
      answer:
        "MNNIT Allahabad encourages entrepreneurship through its innovation and incubation centers. The institute offers mentorship, funding opportunities, and infrastructure support for students interested in starting their own ventures. Events like hackathons, pitch competitions, and workshops provide platforms for budding entrepreneurs.",
    },
    {
      question: "How can I access online learning platforms and resources?",
      answer:
        "MNNIT Allahabad provides access to various online learning platforms and resources through its digital library and subscriptions. Students can access e-books, research papers, and online courses via the institute's portal. Credentials and instructions for access are provided at the beginning of the academic year.",
    },
    {
      question:
        "What are the policies regarding using personal electronics in exams?",
      answer:
        "The use of personal electronics, such as smartphones, smartwatches, and other devices, is strictly prohibited during exams unless explicitly allowed by the examiners for specific courses. Violating this rule can lead to disciplinary actions, including the nullification of exam results.",
    },
    {
      question: "How do I apply for hostel accommodation renewal?",
      answer:
        "Hostel accommodation renewal is generally done at the end of each academic year. Students must apply through the hostel office by submitting a renewal form and the necessary fees. Priority is often given to students with good conduct and academic performance.",
    },
    {
      question:
        "What are the institute's policies on academic integrity and plagiarism?",
      answer:
        "MNNIT Allahabad has strict policies against plagiarism and academic dishonesty. Students are required to submit original work and properly cite all sources. The use of plagiarism detection software is common, and any violations can result in penalties ranging from grade reductions to suspension.",
    },
    {
      question: "Are there any fitness programs or yoga classes available?",
      answer:
        "The institute offers various fitness programs, including yoga classes, aerobics, and gym training sessions. These are usually conducted by certified instructors and are open to all students. The schedule and registration details are available at the sports office.",
    },
    {
      question:
        "How do I participate in national or international competitions?",
      answer:
        "Students interested in participating in national or international competitions can get support from their respective departments or the student activity center. The institute often sponsors teams or individuals representing MNNIT in various technical, cultural, and sports competitions.",
    },
    {
      question: "What is the procedure for filing a complaint or grievance?",
      answer:
        "Students can file complaints or grievances through the grievance redressal cell, which has a structured process for addressing issues. Complaints can be related to academics, hostel facilities, discrimination, or any other concerns. The process involves submitting a written complaint, followed by an investigation and resolution.",
    },
    {
      question:
        "What resources are available for preparing for competitive exams like GATE, GRE, or CAT?",
      answer:
        "The institute provides various resources, including access to study materials, workshops, and mock tests, to help students prepare for competitive exams like GATE, GRE, CAT, etc. The library and online resources also have a wide range of preparation materials.",
    },
    {
      question: "How do I access career counseling and job placement services?",
      answer:
        "Career counseling and job placement services are provided by the Training and Placement Cell. Students can schedule counseling sessions for career advice, attend placement drives, and participate in various workshops designed to enhance employability skills.",
    },
    {
      question:
        "What are the guidelines for organizing events or fests on campus?",
      answer:
        "Students planning to organize events or fests must seek approval from the Student Activity Center (SAC) and the Dean of Students' Welfare. This involves submitting a detailed proposal, including the event's objective, budget, and logistics. All events must adhere to institute policies and guidelines.",
    },
    {
      question: "Are there any on-campus part-time job opportunities?",
      answer:
        "MNNIT Allahabad offers part-time job opportunities for students in various departments, libraries, and research labs. These positions are usually advertised through the academic or departmental offices. Students can apply for these roles to gain experience and earn a stipend.",
    },
    {
      question:
        "What is the process for getting a transcript or academic certificate?",
      answer:
        "Students can request transcripts or academic certificates from the academic office. The process typically involves filling out a request form, paying any applicable fees, and waiting for the processing time. These documents are often required for higher studies or job applications.",
    },
    {
      question:
        "How do I access mental health support and counseling services?",
      answer:
        "Mental health support and counseling services are available through the institute's counseling center. Students can schedule appointments with professional counselors for confidential support. The center also organizes workshops and seminars on mental health awareness.",
    },
    {
      question:
        "What are the library's policies for borrowing and returning books?",
      answer:
        "The library allows students to borrow a specified number of books for a set period. Renewals are possible if there is no waiting list. Late returns may incur fines, and students are responsible for the safe return of borrowed materials. Lost or damaged books must be replaced or compensated for.",
    },
    {
      question: "How can I get involved in community service or social work?",
      answer:
        "Students can participate in community service or social work through various student organizations, including the National Service Scheme (NSS) and Rotaract Club. These organizations frequently organize outreach programs, awareness campaigns, and volunteering opportunities.",
    },
    {
      question: "What are the rules regarding hosting visitors in the hostels?",
      answer:
        "Visitors are generally not allowed inside the hostel rooms. However, there are designated visiting hours when guests can meet students in the common areas or visiting rooms. All visitors must register at the hostel gate and adhere to the hostel's rules and regulations.",
    },
    {
      question:
        "How do I apply for student exchange programs or international internships?",
      answer:
        "Information about student exchange programs and international internships is available through the international relations office. Interested students must meet specific eligibility criteria and may need to pass interviews or selection processes. The office also assists with visa applications and travel arrangements.",
    },
    {
      question: "What facilities are available for students with disabilities?",
      answer:
        "MNNIT Allahabad is equipped with facilities to support students with disabilities, including ramps, elevators, accessible restrooms, and designated seating in classrooms. The institute also provides academic accommodations, such as extra time during exams, to ensure an inclusive environment.",
    },
    {
      question:
        "How do I request a leave of absence for health or personal reasons?",
      answer:
        "Students needing a leave of absence for health or personal reasons must apply through the academic office. The application should include a valid reason and supporting documents, such as a medical certificate. The leave must be approved by the concerned authorities.",
    },
    {
      question: "What are the opportunities for undergraduate research?",
      answer:
        "Undergraduate students can engage in research through projects, internships, and research assistantships. They can work under the guidance of faculty members on ongoing research projects or propose independent studies. The institute encourages students to publish their findings and present them at conferences.",
    },
    {
      question:
        "What is the process for registering a complaint about food quality in the mess?",
      answer:
        "Students can register complaints about food quality through the mess committee or directly with the mess manager. There is often a suggestion or complaint box in the dining area. Additionally, students can bring concerns to the attention of the hostel warden or the Dean of Students' Welfare.",
    },
    {
      question: "Are there any restrictions on leaving campus?",
      answer:
        "There are no restrictions on leaving campus, but students staying in hostels must adhere to specific hostel timings. Late-night outings may require prior permission from the hostel warden. During exams or special events, there may be temporary restrictions for safety or logistical reasons.",
    },
    {
      question: "What is the role of the Student Activity Center (SAC)?",
      answer:
        "The Student Activity Center (SAC) oversees student extracurricular activities, including cultural, technical, and sports events. SAC coordinates various student clubs and societies, provides resources and support for organizing events, and acts as a liaison between the administration and student body.",
    },
    {
      question:
        "How can I access the digital resources provided by the institute?",
      answer:
        "Students can access digital resources such as e-books, online journals, and research databases through the institute's library portal. They need to log in using their institute credentials. Workshops and tutorials are sometimes offered to help students navigate these resources.",
    },
    {
      question: "What are the policies regarding overnight stays in hostels?",
      answer:
        "Overnight stays in hostels are allowed for hostel residents only. Visitors are generally not permitted to stay overnight. If a student needs to stay away from the hostel overnight, they must inform the hostel warden and follow the sign-out procedure.",
    },
    {
      question: "How can I apply for scholarships offered by the institute?",
      answer:
        "Scholarships are offered based on academic performance, financial need, and other criteria. Students can apply through the academic office or the scholarship section of the institute's website. Applications usually require supporting documents such as academic transcripts and income certificates.",
    },
    {
      question: "What facilities are available for research and development?",
      answer:
        "MNNIT Allahabad has various labs, research centers, and specialized facilities for R&D. Students can access these facilities through their departments or by collaborating with faculty members on research projects. The institute also supports innovative projects through grants and funding.",
    },
    {
      question: "What is the process for room allocation in hostels?",
      answer:
        "Room allocation in hostels is typically done based on the year of study and availability. First-year students are usually grouped together. Allocation is managed by the hostel office, and specific preferences or requirements (such as medical needs) can be considered if communicated in advance.",
    },
    {
      question:
        "Are there any opportunities for participating in national or international conferences?",
      answer:
        "Yes, students are encouraged to present papers and participate in national and international conferences. The institute often provides financial support or sponsorship for such events. Students can approach their department heads or the research and development cell for guidance and funding opportunities.",
    },
    {
      question: "What support is available for entrepreneurial initiatives?",
      answer:
        "The institute supports entrepreneurial initiatives through its incubation center, which offers mentorship, resources, and funding. Students with innovative ideas can participate in entrepreneurship programs, pitch competitions, and workshops. The center also connects students with industry mentors and investors.",
    },
    {
      question: "How do I get my student ID card?",
      answer:
        "Student ID cards are issued during the orientation period or shortly after admission. The academic office or the designated issuing authority provides instructions on where and when to collect the ID card. It serves as identification for accessing various campus facilities and services.",
    },
    {
      question:
        "What is the institute's policy on mobile phone usage in classrooms?",
      answer:
        "Mobile phone usage in classrooms is generally restricted to academic purposes only. Students are expected to keep their phones on silent mode and avoid using them unless specifically required for the class. Unauthorized use of phones during lectures may lead to disciplinary action.",
    },
    {
      question: "Are there any specific clubs for cultural activities?",
      answer:
        "Yes, MNNIT Allahabad has various cultural clubs, including music, dance, drama, and art clubs. These clubs organize events, workshops, and competitions throughout the year. Students can join these clubs during the recruitment drives held at the start of the academic year.",
    },
    {
      question: "How can I get involved in technical clubs and societies?",
      answer:
        "Students can join technical clubs and societies by participating in their recruitment processes, usually held at the beginning of the academic year. These clubs cover areas such as robotics, coding, electronics, and mechanical engineering. They organize workshops, competitions, and projects to enhance technical skills.",
    },
    {
      question:
        "What are the rules regarding the use of the internet in hostels?",
      answer:
        "The institute provides Wi-Fi access in hostels with certain usage policies. Students are expected to use the internet responsibly for academic and personal use. Activities like illegal downloading, accessing prohibited content, or excessive usage can lead to restricted access or disciplinary action.",
    },
    {
      question:
        "How are parents informed about students' academic performance?",
      answer:
        "Parents are informed about students' academic performance through periodic academic reports sent via the student portal. The institute may also organize parent-teacher meetings or send specific notifications for significant academic or disciplinary issues.",
    },
    {
      question:
        "What are the available options for personal development workshops?",
      answer:
        "The institute offers a range of personal development workshops, including leadership training, public speaking, time management, and stress management. These workshops are organized by various departments, clubs, and the counseling center. They are open to all students and are often advertised through notices and emails.",
    },
    {
      question: "What is the procedure for getting a bonafide certificate?",
      answer:
        "A bonafide certificate can be obtained from the academic office. Students need to fill out a request form and provide any necessary details such as the purpose of the certificate. It is commonly used for applications for scholarships, internships, or other official purposes.",
    },
    {
      question: "How are disciplinary issues handled at the institute?",
      answer:
        "Disciplinary issues are addressed by the Dean of Students' Welfare in coordination with the disciplinary committee. Depending on the severity of the issue, actions may range from warnings to suspension or expulsion. The institute follows a fair investigation process, and students have the right to appeal decisions.",
    },
    {
      question: "Are there any mentorship programs available for new students?",
      answer:
        "Yes, the institute often has mentorship programs where senior students or faculty members mentor new students. These programs help new students adjust to campus life, understand academic expectations, and access resources. Information about mentorship programs is usually provided during orientation or early in the academic year.",
    },
    {
      question: "How can I get involved in sports teams and events?",
      answer:
        "Students can join sports teams by attending trials or selections held by the Sports Office at the beginning of the academic year. The institute offers various sports, including cricket, football, basketball, badminton, and more. Regular practice sessions and inter-collegiate tournaments are organized throughout the year.",
    },
    {
      question:
        "What are the rules for using the gym and other fitness facilities?",
      answer:
        "The gym and fitness facilities are available to all students, and the rules include maintaining cleanliness, wearing appropriate attire, and following the instructions of the gym trainers. Students need to register for gym access and adhere to the scheduled timings and capacity limits.",
    },
    {
      question: "How can I participate in cultural fests like Culrav?",
      answer:
        "To participate in cultural fests like Culrav, students can join various cultural clubs or directly participate in event auditions and competitions. The fest's organizing committee releases schedules and participation details, and students can sign up for events that interest them.",
    },
    {
      question:
        "What are the library timings, and how can I access its resources?",
      answer:
        "The library is typically open from early morning to late evening on weekdays, with reduced hours on weekends. Students can access physical books, journals, and digital resources. A valid student ID card is required for entry and borrowing books. The library also provides a digital portal for accessing e-books and online journals.",
    },
    {
      question: "What kind of medical facilities are available on campus?",
      answer:
        "The campus has a health center providing basic medical services, including consultation, first aid, and emergency care. There are also tie-ups with local hospitals for specialized treatments. The health center operates during working hours, and a doctor is on call for emergencies.",
    },
    {
      question: "How can I join the student newspaper or media club?",
      answer:
        "Students interested in joining the student newspaper or media club can attend recruitment drives or contact the club coordinators. These clubs offer opportunities in writing, editing, photography, videography, and graphic design. They often work on campus news, events coverage, and creative content.",
    },
    {
      question:
        "What are the procedures for applying for leave during the semester?",
      answer:
        "To apply for leave during the semester, students must fill out a leave application form and submit it to their department head or academic advisor. The application should state the reason and duration of the leave. Approval depends on the circumstances and academic requirements.",
    },
    {
      question:
        "Are there facilities for conducting student projects and workshops?",
      answer:
        "Yes, the institute has dedicated labs and workshops for various departments where students can work on projects. These facilities are equipped with tools and equipment relevant to different fields of study, such as mechanical, electrical, and computer labs. Students can access these facilities with proper authorization.",
    },
    {
      question: "What are the guidelines for maintaining hostel decorum?",
      answer:
        "Hostel decorum includes respecting quiet hours, maintaining cleanliness, and following rules regarding visitors and use of common areas. Alcohol, smoking, and illegal substances are strictly prohibited. Students must adhere to these guidelines to ensure a safe and conducive living environment.",
    },
    {
      question:
        "How can I contribute to environmental and sustainability initiatives on campus?",
      answer:
        "Students can participate in environmental clubs and initiatives focused on sustainability, such as tree planting drives, recycling programs, and energy conservation projects. The institute encourages student-led projects that promote environmental awareness and sustainable practices.",
    },
    {
      question:
        "What career development programs are available for final-year students?",
      answer:
        "For final-year students, the Training and Placement Cell offers career development programs, including resume building, interview preparation, and industry-specific workshops. The cell also organizes campus recruitment drives, where companies visit the campus to hire graduates.",
    },
    {
      question:
        "Are there facilities for students interested in music and performing arts?",
      answer:
        "Yes, the institute has facilities like music rooms and auditoriums for students interested in music and performing arts. There are clubs for instrumentalists, vocalists, and performers, and regular events and workshops are held to hone skills. Instruments and practice spaces are available for use.",
    },
    {
      question: "How can I apply for a re-examination or grade review?",
      answer:
        "To apply for a re-examination or grade review, students must submit a formal request to the academic office, usually within a specified period after the results are declared. The application must include reasons for the request. The academic regulations outline the criteria and process for re-examinations.",
    },
    {
      question:
        "What is the procedure for participating in inter-college competitions?",
      answer:
        "Students can participate in inter-college competitions by registering through the respective clubs or departments organizing the event. Information about these competitions is often circulated through notices, emails, or social media. The institute may provide support for travel and participation.",
    },
    {
      question:
        "What financial assistance is available for economically weaker students?",
      answer:
        "Economically weaker students can avail themselves of various scholarships, fee waivers, and financial aid programs offered by the institute and external organizations. Applications usually require proof of financial need and academic performance. The financial aid office provides guidance on available options and application procedures.",
    },
    {
      question: "How are hostels allocated for postgraduate students?",
      answer:
        "Hostel allocation for postgraduate students is based on availability and specific criteria set by the hostel management. Priority may be given to students based on academic merit, distance from home, or other factors. Applications for hostel accommodation are submitted through the hostel office.",
    },
    {
      question: "What measures are in place for campus security?",
      answer:
        "Campus security is managed by a dedicated security team that monitors the campus 24/7. Security measures include CCTV surveillance, security personnel at gates, and regular patrols. Students are required to carry their ID cards at all times and report any security concerns to the authorities.",
    },
    {
      question:
        "Are there any special interest clubs, such as for gaming or photography?",
      answer:
        "Yes, MNNIT Allahabad has a variety of special interest clubs, including those for gaming, photography, literature, and more. These clubs host events, workshops, and competitions that cater to specific interests. Students can join these clubs during the recruitment period or by contacting the club coordinators.",
    },
    {
      question:
        "What support is available for students facing academic challenges?",
      answer:
        "Students facing academic challenges can seek support from faculty advisors, tutoring services, and counseling services. The institute offers remedial classes, peer mentoring, and academic counseling to help students improve their performance and manage their coursework effectively.",
    },
    {
      question: "How can I participate in student governance or committees?",
      answer:
        "Students can participate in student governance by running for positions in the Student Council or joining various student committees. Elections are usually held annually, and students can campaign and vote for representatives. Committees focus on different areas such as academics, sports, and cultural activities.",
    },
    {
      question:
        "What are the dining options available on campus besides the hostel mess?",
      answer:
        "Besides the hostel mess, there are several dining options on campus, including canteens, cafes, and food kiosks. These places offer a variety of cuisines and snacks. There are also occasional food festivals and special meal services during cultural events.",
    },
    {
      question: "How can I report maintenance issues in my hostel room?",
      answer:
        "Maintenance issues in hostel rooms can be reported to the hostel office or warden. There is usually a maintenance request form that needs to be filled out. The hostel administration will then arrange for repairs or maintenance work as needed.",
    },
    {
      question: "What is the process for changing courses or majors?",
      answer:
        "Students wishing to change courses or majors must apply for a change through the academic office. This process typically involves meeting specific academic criteria and approval from the department heads. The change is subject to seat availability and departmental policies.",
    },
    {
      question:
        "Are there any language learning facilities available on campus?",
      answer:
        "Yes, the institute offers language learning facilities, including language labs and courses in various foreign languages. These are often part of the humanities or international relations departments. Workshops and conversation clubs may also be available for practice.",
    },
    {
      question: "What are the procedures for withdrawing from a course?",
      answer:
        "To withdraw from a course, students must fill out a withdrawal form available at the academic office. The form must be signed by the course instructor and the academic advisor. Withdrawals are typically allowed within a specified period from the start of the course.",
    },
    {
      question:
        "How can I get involved in social justice or activism on campus?",
      answer:
        "Students can get involved in social justice or activism through various clubs and organizations focused on social issues, human rights, and community service. These groups often organize campaigns, workshops, and awareness programs. Students can join these groups during recruitment drives.",
    },
    {
      question: "What is the process for getting a parking permit on campus?",
      answer:
        "Students who wish to park vehicles on campus must apply for a parking permit through the campus security office. The application process includes providing vehicle details and paying a fee. Permits are issued based on availability and compliance with campus parking regulations.",
    },
    {
      question:
        "How does the grading system work, and what is the passing grade?",
      answer:
        "The grading system at MNNIT Allahabad typically follows a grade point average (GPA) system. Grades are awarded based on performance in exams, assignments, and projects. The passing grade for most courses is a 'C' or its equivalent, though this may vary by department.",
    },
    {
      question: "Are there any facilities for international students?",
      answer:
        "The institute provides various facilities for international students, including a dedicated international student office, cultural exchange programs, and language support. Orientation sessions and special events are organized to help international students acclimate to campus life.",
    },
    {
      question: "What are the options for student housing during holidays?",
      answer:
        "During holidays, hostel accommodation is generally available, but students may need to inform the hostel office if they plan to stay. Some hostels may have specific rules or charges for staying during extended breaks. Students can also apply for guest accommodations if needed.",
    },
    {
      question: "How are academic projects evaluated and graded?",
      answer:
        "Academic projects are evaluated based on criteria set by the course instructor, which may include originality, research quality, presentation, and adherence to project guidelines. Grading typically involves a combination of a written report, practical work, and an oral presentation.",
    },
    {
      question: "What support is available for students with disabilities?",
      answer:
        "The institute offers various supports for students with disabilities, including accessible facilities, academic accommodations, and special assistance during exams. The counseling center and disability support office work together to ensure that all students have equal access to educational resources.",
    },
    {
      question: "Can students start their own clubs or organizations?",
      answer:
        "Yes, students can start their own clubs or organizations by proposing a club and obtaining approval from the Student Activity Center (SAC). The proposal should include the club's purpose, structure, and planned activities. Once approved, the club can receive support and resources from the SAC.",
    },
    {
      question:
        "What kind of extracurricular activities are available for personal development?",
      answer:
        "Extracurricular activities for personal development include public speaking clubs, leadership programs, entrepreneurship workshops, and volunteering opportunities. These activities help students develop soft skills, such as communication, teamwork, and leadership.",
    },
    {
      question:
        "How can students get access to research papers and academic journals?",
      answer:
        "Students can access research papers and academic journals through the institute's library portal, which provides subscriptions to various databases and journals. Access is usually available both on-campus and remotely with student login credentials.",
    },
    {
      question: "What are the safety measures in place for laboratory work?",
      answer:
        "Safety measures for laboratory work include mandatory safety training, the use of personal protective equipment (PPE), and strict adherence to lab protocols. Safety guidelines are provided by lab instructors, and emergency equipment such as eyewash stations and fire extinguishers are available.",
    },
    {
      question: "How can I get involved in cultural exchange programs?",
      answer:
        "Students can get involved in cultural exchange programs by applying through the international relations office. These programs may include study abroad opportunities, cultural immersion trips, and hosting international students. Information sessions and application processes are organized periodically.",
    },
    {
      question:
        "What are the guidelines for using the computer labs on campus?",
      answer:
        "Computer labs on campus are available for academic use, and students must adhere to lab rules, including no food or drink, proper logging in and out, and respectful use of resources. Software installation and downloading are generally restricted to prevent security issues.",
    },
    {
      question: "How can students provide feedback on courses and teaching?",
      answer:
        "Students can provide feedback on courses and teaching through course evaluation forms distributed at the end of each semester. Feedback can also be given through student representatives or directly to the academic office. The institute values constructive feedback to improve the quality of education.",
    },
    {
      question:
        "What resources are available for students preparing for higher studies or competitive exams?",
      answer:
        "Resources for students preparing for higher studies or competitive exams include study materials, counseling services, and workshops. The library offers a collection of reference books, and the career counseling center provides guidance on application processes, test preparation, and career planning.",
    },
    {
      question: "What are the rules for using the campus library study rooms?",
      answer:
        "Campus library study rooms are available on a first-come, first-served basis. Students must book these rooms in advance through the library’s booking system. The rooms are intended for group study sessions, and students should adhere to quiet study practices.",
    },
    {
      question: "How can I access past exam papers for study purposes?",
      answer:
        "Past exam papers can be accessed through the institute's library or academic office. Some departments also maintain a repository of previous exam papers on their respective websites. Students should check the availability and usage policies for these resources.",
    },
    {
      question: "What is the process for applying for an educational loan?",
      answer:
        "To apply for an educational loan, students should contact banks or financial institutions that offer education loans. The process typically involves submitting documents such as admission letters, fee structures, and income proofs. The institute's financial aid office can provide guidance and assistance.",
    },
    {
      question:
        "How can I get involved in community service or social outreach programs?",
      answer:
        "Students can get involved in community service and social outreach programs through various clubs and organizations on campus. The Student Activity Center (SAC) often coordinates these programs. Students can also join or initiate projects related to social causes and volunteer opportunities.",
    },
    {
      question:
        "Are there any part-time job opportunities available on campus?",
      answer:
        "Yes, part-time job opportunities are available on campus, including positions in the library, administrative offices, and various student-run initiatives. Students can check with the campus placement office or student employment services for available positions and application procedures.",
    },
    {
      question:
        "What are the guidelines for participating in student exchange programs?",
      answer:
        "Guidelines for participating in student exchange programs include maintaining good academic standing, meeting language proficiency requirements, and adhering to application deadlines. Students should apply through the international relations office and follow the procedures for selection and visa processing.",
    },
    {
      question: "How can I request for academic transcripts or certificates?",
      answer:
        "Academic transcripts and certificates can be requested from the academic office or registrar’s office. Students need to fill out a request form and may have to pay a nominal fee. The processing time can vary, so it's advisable to apply well in advance of any deadlines.",
    },
    {
      question:
        "What support is available for students dealing with mental health issues?",
      answer:
        "The institute provides support for mental health issues through counseling services, including individual therapy, support groups, and mental health workshops. Students can visit the counseling center to seek professional help and access resources for managing stress and mental well-being.",
    },
    {
      question:
        "How can I get involved in research projects with faculty members?",
      answer:
        "Students can get involved in research projects by approaching faculty members whose research interests align with theirs. Opportunities are often announced through departmental meetings or research seminars. Students should express their interest, show initiative, and be prepared to assist with ongoing research.",
    },
    {
      question: "What are the campus regulations regarding bicycle usage?",
      answer:
        "Campus regulations for bicycle usage include designated bike lanes and parking areas. Bicycles should be parked in authorized areas to avoid obstruction. Students are expected to follow traffic rules and safety guidelines while riding on campus to ensure a safe environment for all.",
    },
    {
      question: "How can I access career counseling and guidance services?",
      answer:
        "Career counseling and guidance services are provided by the Training and Placement Cell. Students can schedule appointments with career counselors, attend workshops, and participate in career fairs. The cell also offers resume reviews, interview preparation, and job search assistance.",
    },
    {
      question:
        "What are the procedures for participating in startup incubation programs?",
      answer:
        "To participate in startup incubation programs, students should apply through the institute’s incubation center. The application process includes submitting a detailed proposal or business plan, and potentially undergoing interviews or presentations. The center provides mentorship, resources, and support for selected startups.",
    },
    {
      question:
        "How can I access the institute’s online course materials and lectures?",
      answer:
        "Online course materials and lectures can be accessed through the institute’s learning management system (LMS). Students need to log in using their student credentials. The LMS provides access to course materials, recorded lectures, assignments, and other academic resources.",
    },
    {
      question:
        "What is the procedure for requesting a leave of absence from the institute?",
      answer:
        "To request a leave of absence, students must submit a leave application form to the academic office or their department. The application should include reasons for the leave and duration. Approval is subject to departmental policies and academic regulations.",
    },
    {
      question: "How can I participate in leadership development programs?",
      answer:
        "Leadership development programs are offered through workshops, seminars, and special courses organized by the institute. Students can participate by registering for these programs and attending sessions on topics such as leadership skills, team management, and strategic thinking.",
    },
    {
      question:
        "What are the rules for organizing student events and functions?",
      answer:
        "To organize student events and functions, students must obtain permission from the Student Activity Center (SAC) or relevant authorities. They need to submit event proposals, comply with campus regulations, and follow safety and security protocols. The SAC provides guidance and support for event planning.",
    },
    {
      question: "How can I join or start a research club or society?",
      answer:
        "Students can join existing research clubs or societies by participating in their recruitment processes. To start a new research club, students must submit a proposal to the Student Activity Center (SAC) outlining the club’s objectives and planned activities. Approval and support are provided based on the proposal.",
    },
    {
      question:
        "What are the options for on-campus housing for graduate students?",
      answer:
        "On-campus housing for graduate students is available in designated hostels or apartments. Graduate students can apply for accommodation through the hostel office or housing office. Availability may vary, and applications should be submitted well in advance.",
    },
    {
      question:
        "What is the procedure for addressing academic grievances or disputes?",
      answer:
        "To address academic grievances or disputes, students should first discuss the issue with the course instructor or academic advisor. If unresolved, the grievance can be escalated to the department head or academic committee. The institute has a formal procedure for handling grievances and appeals.",
    },
    {
      question:
        "How can I get involved in peer tutoring or mentoring programs?",
      answer:
        "Students interested in peer tutoring or mentoring can apply through the academic office or relevant student organizations. These programs often involve providing academic support or guidance to fellow students. Training and orientation may be provided for those who participate.",
    },
    {
      question:
        "What are the procedures for requesting a transcript of academic achievements?",
      answer:
        "To request a transcript of academic achievements, students need to submit a request form to the registrar’s office or academic office. This process usually involves paying a fee and providing details such as the number of copies required. Transcripts can be sent directly to institutions or to the student.",
    },
    {
      question:
        "Are there any student-led innovation labs or maker spaces on campus?",
      answer:
        "Yes, the campus has innovation labs and maker spaces where students can work on creative and technical projects. These spaces are equipped with tools and resources for prototyping, experimentation, and development. Access is often provided through department affiliations or student clubs.",
    },
    {
      question: "What are the rules for using the campus library study rooms?",
      answer:
        "Campus library study rooms are available on a first-come, first-served basis. Students must book these rooms in advance through the library’s booking system. The rooms are intended for group study sessions, and students should adhere to quiet study practices.",
    },
    {
      question: "How can I access past exam papers for study purposes?",
      answer:
        "Past exam papers can be accessed through the institute's library or academic office. Some departments also maintain a repository of previous exam papers on their respective websites. Students should check the availability and usage policies for these resources.",
    },
    {
      question: "What is the process for applying for an educational loan?",
      answer:
        "To apply for an educational loan, students should contact banks or financial institutions that offer education loans. The process typically involves submitting documents such as admission letters, fee structures, and income proofs. The institute's financial aid office can provide guidance and assistance.",
    },
    {
      question:
        "How can I get involved in community service or social outreach programs?",
      answer:
        "Students can get involved in community service and social outreach programs through various clubs and organizations on campus. The Student Activity Center (SAC) often coordinates these programs. Students can also join or initiate projects related to social causes and volunteer opportunities.",
    },
    {
      question:
        "Are there any part-time job opportunities available on campus?",
      answer:
        "Yes, part-time job opportunities are available on campus, including positions in the library, administrative offices, and various student-run initiatives. Students can check with the campus placement office or student employment services for available positions and application procedures.",
    },
    {
      question:
        "What are the guidelines for participating in student exchange programs?",
      answer:
        "Guidelines for participating in student exchange programs include maintaining good academic standing, meeting language proficiency requirements, and adhering to application deadlines. Students should apply through the international relations office and follow the procedures for selection and visa processing.",
    },
    {
      question: "How can I request for academic transcripts or certificates?",
      answer:
        "Academic transcripts and certificates can be requested from the academic office or registrar’s office. Students need to fill out a request form and may have to pay a nominal fee. The processing time can vary, so it's advisable to apply well in advance of any deadlines.",
    },
    {
      question:
        "What support is available for students dealing with mental health issues?",
      answer:
        "The institute provides support for mental health issues through counseling services, including individual therapy, support groups, and mental health workshops. Students can visit the counseling center to seek professional help and access resources for managing stress and mental well-being.",
    },
    {
      question:
        "How can I get involved in research projects with faculty members?",
      answer:
        "Students can get involved in research projects by approaching faculty members whose research interests align with theirs. Opportunities are often announced through departmental meetings or research seminars. Students should express their interest, show initiative, and be prepared to assist with ongoing research.",
    },
    {
      question: "What are the campus regulations regarding bicycle usage?",
      answer:
        "Campus regulations for bicycle usage include designated bike lanes and parking areas. Bicycles should be parked in authorized areas to avoid obstruction. Students are expected to follow traffic rules and safety guidelines while riding on campus to ensure a safe environment for all.",
    },
    {
      question: "How can I access career counseling and guidance services?",
      answer:
        "Career counseling and guidance services are provided by the Training and Placement Cell. Students can schedule appointments with career counselors, attend workshops, and participate in career fairs. The cell also offers resume reviews, interview preparation, and job search assistance.",
    },
    {
      question:
        "What are the procedures for participating in startup incubation programs?",
      answer:
        "To participate in startup incubation programs, students should apply through the institute’s incubation center. The application process includes submitting a detailed proposal or business plan, and potentially undergoing interviews or presentations. The center provides mentorship, resources, and support for selected startups.",
    },
    {
      question:
        "How can I access the institute’s online course materials and lectures?",
      answer:
        "Online course materials and lectures can be accessed through the institute’s learning management system (LMS). Students need to log in using their student credentials. The LMS provides access to course materials, recorded lectures, assignments, and other academic resources.",
    },
    {
      question:
        "What is the procedure for requesting a leave of absence from the institute?",
      answer:
        "To request a leave of absence, students must submit a leave application form to the academic office or their department. The application should include reasons for the leave and duration. Approval is subject to departmental policies and academic regulations.",
    },
    {
      question: "How can I participate in leadership development programs?",
      answer:
        "Leadership development programs are offered through workshops, seminars, and special courses organized by the institute. Students can participate by registering for these programs and attending sessions on topics such as leadership skills, team management, and strategic thinking.",
    },
    {
      question:
        "What are the rules for organizing student events and functions?",
      answer:
        "To organize student events and functions, students must obtain permission from the Student Activity Center (SAC) or relevant authorities. They need to submit event proposals, comply with campus regulations, and follow safety and security protocols. The SAC provides guidance and support for event planning.",
    },
    {
      question: "How can I join or start a research club or society?",
      answer:
        "Students can join existing research clubs or societies by participating in their recruitment processes. To start a new research club, students must submit a proposal to the Student Activity Center (SAC) outlining the club’s objectives and planned activities. Approval and support are provided based on the proposal.",
    },
    {
      question:
        "What are the options for on-campus housing for graduate students?",
      answer:
        "On-campus housing for graduate students is available in designated hostels or apartments. Graduate students can apply for accommodation through the hostel office or housing office. Availability may vary, and applications should be submitted well in advance.",
    },
    {
      question:
        "What is the procedure for addressing academic grievances or disputes?",
      answer:
        "To address academic grievances or disputes, students should first discuss the issue with the course instructor or academic advisor. If unresolved, the grievance can be escalated to the department head or academic committee. The institute has a formal procedure for handling grievances and appeals.",
    },
    {
      question:
        "How can I get involved in peer tutoring or mentoring programs?",
      answer:
        "Students interested in peer tutoring or mentoring can apply through the academic office or relevant student organizations. These programs often involve providing academic support or guidance to fellow students. Training and orientation may be provided for those who participate.",
    },
    {
      question:
        "What are the procedures for requesting a transcript of academic achievements?",
      answer:
        "To request a transcript of academic achievements, students need to submit a request form to the registrar’s office or academic office. This process usually involves paying a fee and providing details such as the number of copies required. Transcripts can be sent directly to institutions or to the student.",
    },
    {
      question:
        "Are there any student-led innovation labs or maker spaces on campus?",
      answer:
        "Yes, the campus has innovation labs and maker spaces where students can work on creative and technical projects. These spaces are equipped with tools and resources for prototyping, experimentation, and development. Access is often provided through department affiliations or student clubs.",
    },
    {
      question: "How can I participate in the institute’s annual sports day?",
      answer:
        "To participate in the annual sports day, students should register through the Sports Office or the event organizers. Details about events and registration deadlines are usually announced via campus notices and social media. Participation may require trials or qualifications for certain sports.",
    },
    {
      question: "What are the guidelines for using the campus’s swimming pool?",
      answer:
        "The swimming pool is available for student use during specified hours. Students must adhere to the pool rules, including wearing appropriate swimwear, maintaining cleanliness, and following safety instructions. Access may require a pass or registration through the Sports Office.",
    },
    {
      question: "How can I apply for research funding or grants?",
      answer:
        "To apply for research funding or grants, students should prepare a detailed research proposal and apply through the research office or relevant funding bodies. Information about available grants and application procedures is often provided by the institute’s research administration.",
    },
    {
      question:
        "What are the options for summer internships or training programs?",
      answer:
        "Summer internships and training programs are often arranged through the Training and Placement Cell. Students can apply for internships advertised by companies or seek opportunities through departmental announcements. The placement cell provides guidance on application processes and interview preparations.",
    },
    {
      question:
        "How can I access campus Wi-Fi and what are the usage policies?",
      answer:
        "Campus Wi-Fi can be accessed using student credentials provided by the IT department. Usage policies include adhering to acceptable use guidelines, avoiding illegal activities, and respecting bandwidth limits. The IT support center provides assistance with connectivity issues.",
    },
    {
      question:
        "What are the options for extracurricular activities during semester breaks?",
      answer:
        "During semester breaks, students can engage in various extracurricular activities such as internships, workshops, short courses, and volunteering. The Student Activity Center (SAC) and departmental clubs often organize events and activities during breaks.",
    },
    {
      question:
        "How can I get involved in student-led conferences or seminars?",
      answer:
        "Students can get involved in student-led conferences or seminars by joining the organizing committees or volunteering for various roles. Information about these events is usually shared through campus notices, emails, or social media. Students can also propose and organize their own events with SAC support.",
    },
    {
      question: "What are the procedures for applying for leave from a hostel?",
      answer:
        "To apply for leave from a hostel, students need to submit a leave application form to the hostel warden or administration. The application should include the reason for leave and expected duration. Approval is based on hostel policies and may require notification in advance.",
    },
    {
      question:
        "What types of scholarships are available for meritorious students?",
      answer:
        "Meritorious students can apply for various scholarships based on academic performance, such as merit-based scholarships, departmental awards, and external scholarships. The institute’s financial aid office provides information about available scholarships and application procedures.",
    },
    {
      question:
        "How can I join the institute’s debate or public speaking club?",
      answer:
        "To join the debate or public speaking club, students should attend the club’s recruitment sessions or contact the club coordinators. The club offers opportunities to participate in debates, public speaking events, and workshops aimed at improving communication skills.",
    },
    {
      question:
        "What are the options for on-campus medical check-ups and health services?",
      answer:
        "On-campus medical check-ups and health services are available at the health center, which provides routine check-ups, vaccinations, and consultations. The health center also has partnerships with local clinics and hospitals for specialized care and emergencies.",
    },
    {
      question:
        "How can I participate in the institute’s annual cultural performances?",
      answer:
        "Participation in annual cultural performances can be done by joining relevant cultural clubs or auditioning for roles in performances. Information about auditions and rehearsals is usually provided through the cultural events committee or SAC.",
    },
    {
      question:
        "What are the rules for using personal electronic devices in classrooms?",
      answer:
        "Rules for using personal electronic devices in classrooms include keeping devices on silent mode, using them only for academic purposes, and not disrupting the class. Some instructors may have specific policies regarding device usage during lectures and exams.",
    },
    {
      question:
        "How can I get involved in startup competitions or pitch events?",
      answer:
        "Students can get involved in startup competitions or pitch events by registering through the entrepreneurship cell or startup incubation center. These events are often advertised through campus announcements, and participants need to submit business ideas or project proposals.",
    },
    {
      question:
        "What is the procedure for applying for a semester exchange program?",
      answer:
        "To apply for a semester exchange program, students need to submit an application through the international relations office, including academic transcripts and a statement of purpose. Selection criteria may include academic performance and language proficiency.",
    },
    {
      question:
        "How can I access support for writing research papers or theses?",
      answer:
        "Support for writing research papers or theses is available through faculty advisors, academic writing workshops, and library resources. The writing center or research office may also provide guidance on structuring, editing, and formatting academic papers.",
    },
    {
      question:
        "What are the guidelines for participating in student-run businesses or ventures?",
      answer:
        "Guidelines for participating in student-run businesses or ventures include following campus regulations, obtaining necessary approvals from SAC or entrepreneurship centers, and adhering to ethical business practices. Students can collaborate on business ideas and benefit from mentorship and resources provided by the institute.",
    },
    {
      question: "How can I join or start a student podcast or media project?",
      answer:
        "To join or start a student podcast or media project, students can connect with existing media clubs or propose new projects to the Student Activity Center (SAC). The SAC provides support and resources for media production, including equipment and studio space.",
    },
    {
      question:
        "What are the campus guidelines for using recreational facilities like the gym or sports complex?",
      answer:
        "Campus guidelines for using recreational facilities include following operating hours, adhering to booking or registration procedures, and respecting facility rules. Students should wear appropriate attire, maintain cleanliness, and follow safety protocols while using these facilities.",
    },
    {
      question:
        "How can I access financial aid for research or academic projects?",
      answer:
        "Financial aid for research or academic projects can be accessed through departmental funding programs, research grants, or external scholarships. Students should apply by submitting detailed project proposals and follow the application guidelines provided by the funding bodies.",
    },
    {
      question:
        "What are the procedures for reporting and resolving academic misconduct?",
      answer:
        "To report and resolve academic misconduct, students should follow the institute’s policy for academic integrity. This typically involves reporting the issue to the academic office or committee, providing evidence, and participating in an investigation process. The outcome is based on institutional regulations.",
    },
    {
      question: "What are the campus policies on noise levels in hostels?",
      answer:
        "Campus policies require maintaining low noise levels in hostels, especially during study hours and late at night. Residents are expected to be considerate of others and avoid loud activities. Hostel authorities may take action if noise complaints are received.",
    },
    {
      question:
        "How can I participate in the institute’s innovation challenges or hackathons?",
      answer:
        "To participate in innovation challenges or hackathons, students should register through the event organizers or the institute’s innovation cell. Announcements about these events are usually made through campus notices, emails, and social media. Teams may need to submit project ideas or prototypes.",
    },
    {
      question:
        "What are the options for language support and tutoring services on campus?",
      answer:
        "Language support and tutoring services are available through language labs, tutoring centers, and peer assistance programs. Students can access these services for help with language skills, academic writing, and preparation for language proficiency tests.",
    },
    {
      question:
        "How can I get involved in environmental sustainability initiatives on campus?",
      answer:
        "Students can get involved in environmental sustainability initiatives through campus environmental clubs, green committees, or sustainability projects. The institute often organizes awareness campaigns, clean-up drives, and workshops on sustainable practices.",
    },
    {
      question:
        "What are the rules for hosting events or gatherings in campus venues?",
      answer:
        "To host events or gatherings in campus venues, students need to obtain permission from the Student Activity Center (SAC) or relevant authorities. This includes submitting an event proposal, following venue booking procedures, and adhering to campus regulations for event management.",
    },
    {
      question:
        "How can I apply for academic exchange or study abroad programs?",
      answer:
        "To apply for academic exchange or study abroad programs, students should submit an application through the international relations office or the program’s coordinator. Requirements may include academic transcripts, letters of recommendation, and a statement of purpose.",
    },
    {
      question:
        "What are the options for accessing online academic resources and journals?",
      answer:
        "Online academic resources and journals can be accessed through the institute’s library portal. Students need to use their credentials to log in and access various databases, digital libraries, and electronic journals available through the library’s subscriptions.",
    },
    {
      question:
        "How can I join or start a music band or performing arts group?",
      answer:
        "To join or start a music band or performing arts group, students should connect with existing groups or propose new ones through the Student Activity Center (SAC). Auditions or membership drives are often held, and the SAC can provide resources and support for new groups.",
    },
    {
      question:
        "What are the guidelines for using shared spaces like common rooms and study areas?",
      answer:
        "Guidelines for using shared spaces include keeping areas clean, respecting others’ privacy, and following posted rules. Students should avoid monopolizing spaces for long periods and adhere to any booking or usage policies established by the institute.",
    },
    {
      question: "How can I access career advice and job placement services?",
      answer:
        "Career advice and job placement services are available through the Training and Placement Cell. Students can schedule career counseling sessions, attend job fairs, and receive assistance with resume writing, interview preparation, and job search strategies.",
    },
    {
      question:
        "What are the procedures for handling academic disputes or grievances?",
      answer:
        "Procedures for handling academic disputes or grievances involve discussing the issue with the course instructor or academic advisor. If unresolved, students can escalate the matter to the department head or academic committee. The institute has formal grievance redressal mechanisms in place.",
    },
    {
      question:
        "How can I get involved in campus research and development projects?",
      answer:
        "Students can get involved in campus research and development projects by contacting faculty members or research centers. Opportunities are often advertised through departmental notices or research seminars. Students may also propose their own research ideas for consideration.",
    },
    {
      question:
        "What are the options for participating in community outreach programs?",
      answer:
        "Community outreach programs can be accessed through student organizations, social service clubs, or the institute’s community service office. Students can participate in initiatives such as educational programs, health camps, and environmental conservation projects.",
    },
    {
      question:
        "How can I access support for writing and editing academic papers?",
      answer:
        "Support for writing and editing academic papers is available through writing centers, faculty advisors, and academic workshops. Students can receive guidance on structure, content, and formatting from these resources to improve the quality of their papers.",
    },
    {
      question:
        "What are the procedures for requesting temporary accommodation during short-term projects or internships?",
      answer:
        "To request temporary accommodation, students should apply through the hostel office or student housing services, providing details about the duration and reason for the accommodation. Availability may vary, and students should make arrangements well in advance.",
    },
    {
      question:
        "How can I participate in student government or council elections?",
      answer:
        "Participation in student government or council elections involves running for a position or voting in the elections. Students should check announcements from the Student Activity Center (SAC) for election dates, nomination procedures, and campaigning rules.",
    },
    {
      question:
        "What are the guidelines for participating in campus-based competitions and contests?",
      answer:
        "Guidelines for participating in campus-based competitions and contests include registering according to the event’s rules, adhering to submission deadlines, and following competition-specific regulations. Details about competitions are usually provided by organizing committees or through campus announcements.",
    },
    {
      question:
        "How can I access information about financial aid and scholarships?",
      answer:
        "Information about financial aid and scholarships can be accessed through the financial aid office or student services. Students should inquire about available scholarships, application procedures, and eligibility criteria, and keep track of application deadlines.",
    },
    {
      question:
        "What are the options for accessing academic support and tutoring services?",
      answer:
        "Academic support and tutoring services are available through departmental tutoring centers, peer tutoring programs, and academic workshops. Students can seek help with coursework, exam preparation, and study skills from these resources.",
    },
    {
      question:
        "How can I get involved in interdisciplinary projects or initiatives?",
      answer:
        "Students can get involved in interdisciplinary projects by joining collaborative research groups, participating in cross-departmental workshops, or proposing projects that integrate multiple disciplines. Information about such opportunities is often shared through academic departments and research centers.",
    },
    {
      question:
        "What are the campus guidelines for conducting personal and academic surveys?",
      answer:
        "Guidelines for conducting personal and academic surveys include obtaining permission from relevant authorities, ensuring privacy and confidentiality of respondents, and adhering to ethical standards. Students should submit their survey proposals for approval before distribution.",
    },
    {
      question: "How can I access campus transportation services?",
      answer:
        "Campus transportation services, such as shuttle buses or carpooling options, can be accessed by checking schedules and routes provided by the campus transport office. Students can use their ID cards or registration details to avail of these services.",
    },
    {
      question: "What are the campus policies regarding personal vehicle use?",
      answer:
        "Campus policies regarding personal vehicle use include registering vehicles with the campus security, adhering to parking regulations, and following traffic rules. Students should park in designated areas and avoid blocking access routes or parking in restricted zones.",
    },
    {
      question: "How can I participate in campus cultural and social events?",
      answer:
        "To participate in campus cultural and social events, students should keep an eye on announcements from the Student Activity Center (SAC) and other event organizers. They can sign up for events, auditions, or volunteer roles as advertised through campus communications.",
    },
    {
      question:
        "What are the options for accessing academic advising and mentorship?",
      answer:
        "Academic advising and mentorship are provided through faculty advisors, academic departments, and mentorship programs. Students can schedule meetings with advisors to discuss academic progress, career plans, and personal development.",
    },
    {
      question:
        "How can I join or start a student chapter of a professional organization?",
      answer:
        "To join or start a student chapter of a professional organization, students should contact the professional organization for guidelines on student chapters. They may need to submit a proposal or application to the organization and get approval from the Student Activity Center (SAC).",
    },
    {
      question:
        "What are the campus guidelines for using shared kitchen facilities in hostels?",
      answer:
        "Guidelines for using shared kitchen facilities in hostels include cleaning up after use, following safety protocols, and avoiding food wastage. Students should also adhere to hostel rules regarding food storage and preparation to maintain cleanliness and safety.",
    },
    {
      question:
        "How can I get involved in peer-to-peer learning and study groups?",
      answer:
        "Students can get involved in peer-to-peer learning and study groups by joining or forming study groups through academic departments or student organizations. Notices about study groups are often posted on campus bulletin boards or through student forums.",
    },
    {
      question:
        "What are the options for participating in intercollegiate sports and tournaments?",
      answer:
        "To participate in intercollegiate sports and tournaments, students should join the institute’s sports teams or clubs. They can attend trials and practice sessions, and the Sports Office provides information about upcoming tournaments and competition requirements.",
    },
    {
      question:
        "What is the procedure for filing a complaint or grievance regarding campus facilities?",
      answer:
        "To file a complaint or grievance regarding campus facilities, students should submit a written complaint to the facilities management office or student affairs office. The complaint should include details about the issue and any supporting evidence. Follow-up procedures and resolutions are handled by the respective office.",
    },
    {
      question:
        "How can I access campus career development resources and workshops?",
      answer:
        "Campus career development resources and workshops are available through the Training and Placement Cell. Students can register for workshops, career counseling sessions, and networking events to enhance their career skills and opportunities.",
    },
    {
      question:
        "What are the guidelines for participating in campus-based research and development programs?",
      answer:
        "Guidelines for participating in research and development programs include submitting research proposals to the research office, following ethical standards, and complying with project deadlines. Students can collaborate with faculty or join existing research projects through departmental announcements.",
    },
    {
      question:
        "How can I access support for academic writing and presentation skills?",
      answer:
        "Support for academic writing and presentation skills is available through writing centers, academic workshops, and faculty guidance. Students can attend workshops on writing and presentations, or seek one-on-one assistance from tutors or advisors.",
    },
    {
      question:
        "What are the campus policies regarding the use of personal electronic devices in laboratories?",
      answer:
        "Policies regarding the use of personal electronic devices in laboratories include obtaining permission from lab supervisors, avoiding disruption, and using devices only for academic purposes. Devices should be used responsibly to ensure safety and compliance with lab rules.",
    },
    {
      question:
        "How can I participate in the institute’s annual research symposium or conference?",
      answer:
        "To participate in the annual research symposium or conference, students should submit their research papers or project abstracts according to the event guidelines. Information about submission deadlines, formats, and registration is typically provided by the event organizers.",
    },
    {
      question:
        "What are the procedures for requesting access to restricted campus areas or facilities?",
      answer:
        "To request access to restricted campus areas or facilities, students need to obtain permission from the relevant authority or office. This usually involves filling out a request form and providing a valid reason for access. Approval is granted based on the purpose and security considerations.",
    },
    {
      question:
        "How can I get involved in student-led charity events or fundraisers?",
      answer:
        "Students can get involved in charity events or fundraisers by joining student organizations focused on social causes or volunteering for events organized by these groups. The Student Activity Center (SAC) and other student clubs often coordinate these activities.",
    },
    {
      question:
        "What are the options for participating in campus-based leadership training programs?",
      answer:
        "Campus-based leadership training programs are offered through workshops, seminars, and specialized courses. Students can register for these programs through the leadership development office or student organizations focused on leadership and personal growth.",
    },
    {
      question:
        "How can I access information about summer school or additional academic courses?",
      answer:
        "Information about summer school or additional academic courses can be accessed through the academic office or registrar’s office. Students should check the summer session schedule, course offerings, and registration deadlines for enrolling in additional courses.",
    },
    {
      question:
        "What are the campus rules for using the institute’s recreational and fitness facilities?",
      answer:
        "Rules for using recreational and fitness facilities include following operating hours, adhering to safety guidelines, and respecting other users. Students should follow the specific regulations posted at each facility and maintain cleanliness and order.",
    },
    {
      question:
        "How can I get involved in campus-based environmental conservation efforts?",
      answer:
        "Students can get involved in environmental conservation efforts through campus environmental clubs, sustainability initiatives, and conservation projects. Participation opportunities are often advertised through campus notices, student organizations, and the environmental office.",
    },
    {
      question:
        "What are the procedures for requesting academic extensions or make-up exams?",
      answer:
        "To request academic extensions or make-up exams, students should submit a formal request to the academic office or course instructor, explaining the reason for the extension or make-up exam. Approval is subject to institutional policies and may require supporting documentation.",
    },
    {
      question:
        "What are the options for participating in campus entrepreneurship and startup incubators?",
      answer:
        "Students interested in entrepreneurship and startups can join the institute’s entrepreneurship cell or startup incubator. They can participate in workshops, mentorship programs, and pitch events. The incubation center provides resources, funding opportunities, and guidance for new ventures.",
    },
    {
      question:
        "How can I access support for mental health and counseling services?",
      answer:
        "Mental health and counseling services are available through the institute’s counseling center. Students can schedule appointments with counselors, attend workshops on mental wellness, and access support for stress, anxiety, and personal issues.",
    },
    {
      question:
        "What are the guidelines for participating in student-led community service projects?",
      answer:
        "Guidelines for participating in community service projects include registering with the organizing student group, following project protocols, and adhering to ethical standards. Information about projects is typically shared through campus announcements and student organizations.",
    },
    {
      question:
        "How can I get involved in campus-based technology and innovation labs?",
      answer:
        "Students can get involved in technology and innovation labs by joining relevant clubs or research groups, participating in lab activities, and collaborating on projects. The labs often offer workshops, hackathons, and research opportunities.",
    },
    {
      question:
        "What are the procedures for accessing campus library resources and study materials?",
      answer:
        "To access campus library resources, students need to use their library ID for borrowing books, accessing digital resources, and utilizing study rooms. The library provides access to physical and electronic resources, and students can also use online catalogs for research.",
    },
    {
      question:
        "How can I participate in the institute’s annual science and technology fair?",
      answer:
        "To participate in the annual science and technology fair, students should submit their project proposals or abstracts according to the event guidelines. Registration details, deadlines, and event criteria are usually provided by the event organizers.",
    },
    {
      question:
        "What are the options for joining student clubs focused on arts and crafts?",
      answer:
        "Students interested in arts and crafts can join student clubs dedicated to these activities. The Student Activity Center (SAC) and various cultural organizations host workshops, exhibitions, and club meetings related to arts and crafts.",
    },
    {
      question:
        "How can I get involved in campus-based film and media projects?",
      answer:
        "To get involved in film and media projects, students can join media clubs, participate in film productions, and volunteer for campus media initiatives. The media club or film society often organizes screenings, workshops, and collaborative projects.",
    },
    {
      question:
        "What are the campus rules regarding the use of personal computers and electronic devices in classrooms?",
      answer:
        "Campus rules require students to use personal computers and electronic devices in classrooms in a manner that does not disrupt the class. Devices should be on silent mode and used only for academic purposes. Some classes may have specific policies on device usage.",
    },
    {
      question:
        "How can I access information about campus housing and accommodation options for family or guests?",
      answer:
        "Information about campus housing and accommodation options for family or guests can be obtained from the campus housing office or guest services. Students can inquire about availability, booking procedures, and any associated costs for temporary accommodation.",
    },
    {
      question:
        "What are the options for participating in campus-based cultural exchange programs?",
      answer:
        "Campus-based cultural exchange programs offer opportunities for students to engage with international peers through exchange programs, cultural events, and language exchanges. Information about these programs is available through the international relations office or cultural clubs.",
    },
    {
      question:
        "How can I apply for funding or scholarships for student research projects?",
      answer:
        "To apply for funding or scholarships for student research projects, students should prepare a detailed research proposal and apply through the research office or relevant funding bodies. The application process typically involves submitting project details and meeting specific criteria.",
    },
    {
      question:
        "What are the guidelines for using the institute’s sports facilities and equipment?",
      answer:
        "Guidelines for using sports facilities and equipment include following operating hours, booking procedures, and safety rules. Students should respect facility usage policies, clean up after use, and adhere to any additional regulations set by the sports office.",
    },
    {
      question:
        "How can I get involved in student advocacy and representation roles?",
      answer:
        "Students can get involved in advocacy and representation roles by participating in student government elections, joining student representative councils, and engaging with campus issues. Opportunities for involvement are announced through the Student Activity Center (SAC) and campus communications.",
    },
    {
      question:
        "What are the options for accessing support for academic and career planning?",
      answer:
        "Support for academic and career planning is available through academic advisors, career counselors, and planning workshops. Students can seek guidance on course selection, career goals, internships, and job search strategies from these resources.",
    },
    {
      question:
        "How can I participate in the institute’s annual alumni meet or networking events?",
      answer:
        "To participate in the annual alumni meet or networking events, students should register through the alumni relations office or event organizers. These events offer opportunities to connect with alumni, gain insights into career paths, and build professional networks.",
    },
    {
      question:
        "What are the procedures for requesting academic transcripts and certificates?",
      answer:
        "To request academic transcripts and certificates, students should submit a request form to the registrar’s office or academic affairs office. The request typically requires details such as the purpose, recipient information, and any applicable fees.",
    },
    {
      question:
        "How can I access information about campus safety and emergency procedures?",
      answer:
        "Information about campus safety and emergency procedures is available through the campus security office and safety awareness programs. Students should familiarize themselves with emergency contact numbers, evacuation procedures, and safety protocols provided by the institute.",
    },
    {
      question:
        "What are the options for participating in student-led tech talks or seminars?",
      answer:
        "To participate in student-led tech talks or seminars, students should attend announcements from the tech clubs or seminar organizers. These events often involve guest speakers, presentations, and discussions on various technology topics.",
    },
    {
      question:
        "How can I access support for time management and study skills?",
      answer:
        "Support for time management and study skills is available through academic workshops, tutoring centers, and counseling services. Students can attend workshops on effective study techniques, time management strategies, and academic performance improvement.",
    },
    {
      question:
        "What are the campus policies regarding the use of recreational facilities during exams?",
      answer:
        "Campus policies regarding the use of recreational facilities during exams include limited access to ensure a quiet environment for studying. Students should check facility hours and follow any restrictions or guidelines set by the institute during exam periods.",
    },
    {
      question:
        "What are the procedures for applying for leave of absence from classes?",
      answer:
        "To apply for a leave of absence, students should submit a leave application to their academic department or the registrar's office, including the reason for the leave and the expected duration. Supporting documents may be required for medical or other specific types of leave.",
    },
    {
      question:
        "How can I join the institute’s debate or public speaking club?",
      answer:
        "To join the debate or public speaking club, students should attend club meetings, auditions, or orientation sessions announced by the club. Participation can be initiated by contacting current members or the Student Activity Center (SAC) for details.",
    },
    {
      question:
        "What are the guidelines for using the campus gym and fitness center?",
      answer:
        "Guidelines for using the campus gym and fitness center include following operating hours, adhering to safety protocols, and booking facilities in advance if required. Students should respect cleanliness standards and follow the instructions provided by the gym staff.",
    },
    {
      question:
        "How can I access support for learning disabilities or special educational needs?",
      answer:
        "Support for learning disabilities or special educational needs is available through the institute’s disability services office. Students can register with the office, provide necessary documentation, and access accommodations and support tailored to their needs.",
    },
    {
      question:
        "What are the procedures for booking campus venues for personal events?",
      answer:
        "To book campus venues for personal events, students should submit a venue booking request to the Student Activity Center (SAC) or the relevant department. The request should include event details, date, time, and any special requirements. Approval is based on venue availability and regulations.",
    },
    {
      question:
        "How can I get involved in student-led scientific research projects?",
      answer:
        "Students can get involved in scientific research projects by joining research groups, participating in lab activities, or collaborating with faculty members. Research opportunities are often advertised through academic departments or research centers.",
    },
    {
      question:
        "What are the options for participating in campus-based social justice initiatives?",
      answer:
        "Students interested in social justice initiatives can participate through advocacy groups, student organizations, and campus events focused on social issues. The Student Activity Center (SAC) and related clubs often organize campaigns, workshops, and discussions.",
    },
    {
      question:
        "How can I apply for on-campus student jobs or work-study programs?",
      answer:
        "To apply for on-campus student jobs or work-study programs, students should check job postings through the student employment office or career services. Applications typically require a resume, application form, and sometimes an interview.",
    },
    {
      question:
        "What are the campus policies on using personal data for academic purposes?",
      answer:
        "Campus policies on using personal data for academic purposes include ensuring data privacy and confidentiality. Students' personal information should be used only for academic-related activities and should comply with data protection regulations.",
    },
    {
      question:
        "How can I access information about campus-based public health and wellness programs?",
      answer:
        "Information about public health and wellness programs can be accessed through the campus health office or wellness center. Programs may include health screenings, wellness workshops, and fitness classes, with schedules and registration details available from the office.",
    },
    {
      question:
        "What are the guidelines for participating in student-led art exhibitions or performances?",
      answer:
        "Guidelines for participating in art exhibitions or performances include submitting work according to event criteria, adhering to display or performance standards, and following deadlines. Students should check with the organizing committee for specific submission requirements and dates.",
    },
    {
      question:
        "How can I get involved in student-led environmental advocacy and sustainability projects?",
      answer:
        "Students can get involved in environmental advocacy and sustainability projects through campus green clubs, environmental committees, and sustainability initiatives. Opportunities are advertised through campus notices, student groups, and the environmental office.",
    },
    {
      question:
        "What are the procedures for resolving academic conflicts or disputes with professors?",
      answer:
        "To resolve academic conflicts or disputes, students should first discuss the issue directly with the professor. If unresolved, the matter can be escalated to the department head or academic committee. The institute provides formal grievance procedures for such cases.",
    },
    {
      question:
        "How can I participate in campus-based international cultural festivals or events?",
      answer:
        "Participation in international cultural festivals or events can be initiated by joining cultural clubs or committees organizing these events. Students should attend meetings, auditions, or planning sessions to get involved in the festival activities and performances.",
    },
    {
      question:
        "What are the campus rules for using and managing student group funds?",
      answer:
        "Campus rules for using and managing student group funds include maintaining accurate records, adhering to budget guidelines, and following financial reporting procedures. Student groups must submit expenditure reports and get approvals for major expenses from the Student Activity Center (SAC).",
    },
    {
      question:
        "How can I access academic journals and research papers for my coursework?",
      answer:
        "Academic journals and research papers can be accessed through the campus library’s electronic databases and journal subscriptions. Students should use their library credentials to log in and search for relevant papers and journals through the library’s online portal.",
    },
    {
      question:
        "What are the options for participating in campus-based leadership development programs?",
      answer:
        "Campus-based leadership development programs include workshops, seminars, and training sessions organized by the leadership development office or student organizations. Students can register for these programs to enhance their leadership skills and participate in leadership activities.",
    },
    {
      question:
        "How can I get involved in campus-based music or performing arts productions?",
      answer:
        "To get involved in music or performing arts productions, students should join related clubs or organizations, attend auditions, and participate in rehearsals. The Student Activity Center (SAC) and cultural committees often coordinate these productions and performances.",
    },
    {
      question:
        "What are the campus policies regarding the use of social media for academic and student-related activities?",
      answer:
        "Campus policies on social media use include guidelines for responsible posting, respecting privacy, and maintaining professionalism. Students should use social media appropriately for academic and student-related activities, avoiding posts that could harm the institute's reputation or breach privacy.",
    },
    {
      question:
        "How can I access information about on-campus housing maintenance and repair requests?",
      answer:
        "To access information about housing maintenance and repair requests, students should contact the hostel office or housing management office. Requests can be submitted through a maintenance request form, and students should follow up with the office to ensure timely resolution.",
    },
    {
      question:
        "What are the guidelines for participating in student-led peer mentoring programs?",
      answer:
        "Guidelines for participating in peer mentoring programs include completing any required training, adhering to program protocols, and providing support to mentees. Students interested in becoming mentors should apply through the mentoring program office or student organizations.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="h-screen flex w-screen flex-col p-6">
      <div className=" h-16 w-full flex justify-between items-center border rounded-lg dark:border-zinc-800 p-2">
        <DropdownMenuBtn></DropdownMenuBtn>
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"></div>
        <div className=" flex items-center justify-center">
          {" "}
          <Link href="/chat">
            <Button variant="outline" className=" mr-2">
              Ask Moti
            </Button>
          </Link>
          <ToggleModeBtn></ToggleModeBtn>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="h-[1000px] w-full flex flex-col md:px-6 py-6">
        <div className="w-full flex flex-col items-center justify-center my-6">
          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className=" w-full px-4">
            {filteredFAQs.length === 0 ? (
              <div className=" flex flex-col">
                <p className="text-center text-gray-600 mb-3">
                  No matching FAQs found.
                </p>
                <Link href="/contribute">
                  <Button>Contribute</Button>
                </Link>
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-left hover:text-purple-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
