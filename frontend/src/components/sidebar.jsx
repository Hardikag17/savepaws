import "../styles/sidebar.css";
export default function SideBar() {
  return (
    <div class="sticky-top">
      <div class="d-flex flex-sm-column flex-row flex-nowrap  align-items-center sticky-top">
        <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="filterOption1"
            >
              Gender
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              MinAge
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Orders"
            >
              MaxAge
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Products"
            >
              Breed
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Customers"
            >
              Health
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
