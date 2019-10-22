import React from "react";
import { NextComponentType, NextPageContext } from "next";
import { Log } from "../app/modules/type";

type Props = {
  logs: Log[];
};

const LogTable: NextComponentType<NextPageContext, {}, Props> = ({ logs }) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <td>Turn</td>
        <td>Call Number</td>
        <td>Result</td>
      </tr>
    </thead>
    <tbody>
      {logs.map((log, i) => (
        <tr key={i}>
          <td>{log.turn}</td>
          <td>{log.call_number.join(", ")}</td>
          <td>
            {log.result.hit} Hit {log.result.blow} Blow
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LogTable;
