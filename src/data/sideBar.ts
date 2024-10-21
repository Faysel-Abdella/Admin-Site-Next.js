import assets from "@/assets";

const sideBarContent = [
  {
    order: "1",
    mainTitle: "회원 관리",
    icon: assets.member,
    activeIcon: assets.memberActive,
    init: "/admin/membership",
    firstRoute: "/admin/membership/dashboard",
    subTitles: [
      {
        label: "대시보드", //dashboard
        route: "/admin/membership/dashboard",
      },

      {
        label: "회원정보 등록", //Register member information
        route: "/admin/membership/register-member",
      },
      {
        label: "1:1 문의 관리", //1:1 inquiry management
        route: "/admin/membership/inquiries-1to1",
      },
      {
        label: "고객만족도 등록", //customer satisfaction
        route: "/admin/membership/customer-satisfaction",
      },
      {
        label: "접속정보조회", //Connection information inquiry
        route: "/admin/membership/connection-info",
      },
      {
        label: "고객만족도조회", //Customer satisfaction inquiry
        route: "/admin/membership/customer-inquiry",
      },
    ],
  },
  {
    order: "2",
    mainTitle: "매출 관리",
    icon: assets.sales,
    activeIcon: assets.salesActive,
    init: "/admin/sales",
    firstRoute: "/admin/sales/customer-reservation",
    subTitles: [
      {
        label: "고객예약현황", //Customer Reservation Status
        route: "/admin/sales/customer-reservation",
      },
      {
        label: "예약현황조회", //Check reservation Status
        route: "/admin/sales/reservation-status",
      },
      {
        label: "매출현황조회", //Check sales Status
        route: "/admin/sales/sales-status",
      },
    ],
  },
  {
    order: "3",
    mainTitle: "단체방 관리",
    icon: assets.groupRoom,
    activeIcon: assets.groupRoomActive,
    init: "/admin/group-room",
    firstRoute: "/admin/group-room/register-g-room",
    subTitles: [
      {
        label: "단체방 등록", //register group room
        route: "/admin/group-room/register-g-room",
      },
      {
        label: "코스 등록", //course registration
        route: "/admin/group-room/course-registration",
      },
      {
        label: "경유지 등록", //register transit point
        route: "/admin/group-room/transit-register",
      },
      {
        label: "문제 등록", //register a problem
        route: "/admin/group-room/problem-registration",
      },
      {
        label: "게임진행 현황", //game progress status
        route: "/admin/group-room/game-progress",
      },
    ],
  },

  {
    order: "4",
    mainTitle: "시스템 관리",
    icon: assets.system,
    activeIcon: assets.salesActive,
    init: "/admin/system-admin",
    firstRoute: "/admin/system-admin/common-code",
    subTitles: [
      {
        label: "공통코드", //common code
        route: "/admin/system-admin/common-code",
      },
      {
        label: "휴일정보 등록", //register holiday information
        route: "/admin/system-admin/holiday-info-register",
      },
      {
        label: "투어시간 일괄적용", //tour time applies in full
        route: "/admin/system-admin/tour-time-applies",
      },
      {
        label: "투어시간 관리", //tour time management
        route: "/admin/system-admin/tour-time-management",
      },
      {
        label: "공지사항 등록", //register notice
        route: "/admin/system-admin/notice-register",
      },
      {
        label: "자주묻는질문 등록", //register FAQ
        route: "/admin/system-admin/FAQ-register",
      },
      {
        label: "회사정보 등록", //register company info
        route: "/admin/system-admin/company-info",
      },
      {
        label: "이용약관 등록", //term of use registration
        route: "/admin/system-admin/registration-term",
      },
      {
        label: "개인정보처리방침 등록", //Register your personal information processing policy
        route: "/admin/system-admin/personal-information-policy",
      },
      {
        label: "마케팅활용동의 등록", //Register consent for marketing use
        route: "/admin/system-admin/register-marketing",
      },
    ],
  },
];

export default sideBarContent;
