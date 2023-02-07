import React from "react";
import domainListData from "../../Components/DomainTableList/DomainListTableData";
function DomainTableList() {
  return (
    <table class="table mt-12">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Domains (per year)</th>
          <th scope="col">Register per year</th>
          <th scope="col">Renew per year</th>
          <th scope="col">Transfer per year</th>
        </tr>
      </thead>
      <tbody>
        {domainListData.map((domItem) => {
          return (
            <tr key={domItem.id}>
              <th scope="row">{domItem.id}</th>
              <td>{domItem.domainName}</td>
              <td>{domItem.domainRgister}</td>
              <td>{domItem.domainRenew}</td>
              <td>{domItem.domainTransfer}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DomainTableList;
