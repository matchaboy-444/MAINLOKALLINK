import { useState } from "react";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
} from "docx";
import "/src/App.css";
import axios from "axios";
import { saveAs } from "file-saver";

export default function SendFile() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");

  const sendNotif = () => {
    const d = new Date();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const yr = d.getFullYear();

    const dateRequest = `${month}/${day}/${yr}`;
    const timeRequest = d.toLocaleTimeString();

    const sendRequestAdmin = {
      name: name,
      filetype: "Barangay Clearance",
      time: timeRequest,
      date: dateRequest,
      status: "Pending",
    };

    axios
      .post("http://localhost:3000/filerecord", sendRequestAdmin)
      .then((res) => {
        console.log(res.data);
        alert("ok");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDownload = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 1800,
                bottom: 1800,
                left: 1800,
                right: 1800,
              },
            },
          },
          children: [
            new Paragraph({
              spacing: { after: 200 },
              children: [
                new TextRun({
                  text: "Republic of the Philippines\nCity of Manila\nBarangay of Tondo",
                  size: 22,
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [
                new TextRun({
                  text: "Barangay 163",
                  bold: true,
                  size: 30,
                  font: "Times New Roman",
                  italics: true,
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              border: {
                bottom: {
                  color: "000000",
                  style: BorderStyle.SINGLE,
                  size: 6,
                },
              },
              spacing: { after: 400 },
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [
                new TextRun({
                  text: "OFFICE OF THE BARANGAY CAPTAIN",
                  bold: true,
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              spacing: { after: 400 },
              children: [
                new TextRun({
                  text: "BARANGAY CLEARANCE",
                  bold: true,
                  size: 28,
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              spacing: { before: 300, after: 200 },
              children: [
                new TextRun({
                  text: "TO WHOM IT MAY CONCERN:",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: 200 },
              indent: { left: 720 },
              text: `This is to certify that ${name},\nand a resident of Barangay 163 Zone 14 District II Manila Vicinity Map, is known to be of good moral character and law-abiding citizen in the community.`,
              size: 24,
            }),
            new Paragraph({
              spacing: { after: 200 },
              indent: { left: 720 },
              text: "To certify further, that he/she has no derogatory and/or criminal records filed in this barangay.",
            }),
            new Paragraph({
              spacing: { after: 300 },
              indent: { left: 720 },
              children: [
                new TextRun({
                  text: `ISSUED this barangay clearance day of ${date}, at Barangay 163 Zone 14 District II Manila Vicinity Map upon request of the interested party for whatever legal purposes of ${purpose}.`,
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 600 },
              children: [new TextRun({ text: "JOEL B. LLORCA", bold: true })],
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun({ text: "Barangay Captain" })],
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph({
              spacing: { before: 400 },
              children: [
                new TextRun({
                  text: "O.R. No.   __________________",
                  break: 1,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Date Issued:   ${date}`,
                  break: 1,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Doc. Stamp:     Paid", break: 1 }),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${name} Request File.docx`);
    sendNotif();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 appearing">
      <div className="text-center">
        <h1 className="text-4xl font-kanit p-4 text-blue-900 font-bold">
          REQUEST FILE
        </h1>
        <div className="font-kanit text-2xl m-5">
          <label htmlFor="name" className="inline-block">
            NAME:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gray-2000 rounded-md mx-5 border-solid border-2"
            />
          </label>
          <label htmlFor="date" className="inline-block">
            DATE:
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-gray-2000 rounded-md mx-5 border-solid border-2"
            />
          </label>
          <br />
          <textarea
            rows="6"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-[75%] p-3 my-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base italic font-thin"
            placeholder="Write the purpose here..."
          />
          <br />
          <select
            onChange={(e) => setFileType(e.target.value)}
            className="text-xl font-kanit my-5 pr-5 border-solid border-black border-2 rounded-md"
          >
            <option value="" disabled>
              SELECT FILE
            </option>
            <option value="Barangay Certificate">BARANGAY CERTIFICATE</option>
            <option value="Barangay Indigency">BARANGAY INDIGENCY</option>
            <option value="Financial Assistance">FINANCIAL ASSISTANCE</option>
          </select>
          <br />
          <button
            onClick={handleDownload}
            className="bg-red-700 px-6 py-3 rounded-md text-white my-5 font-anton font-extralight"
          >
            SAVE
          </button>
        </div>
      </div>
    </section>
  );
}
