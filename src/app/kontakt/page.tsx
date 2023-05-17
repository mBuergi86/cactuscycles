"use client";

import React, { useState } from "react";
import { ReCaptcha } from "next-recaptcha-v3";
import axios from "axios";

export default function kontakt() {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [benachrichtigung, setBenachrichtigung] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "./src/app/api/send.php",
      headers: { "content-type": "application/json" },
      data: {
        vorname,
        nachname,
        email,
        nachricht,
      },
    }).then((response: { data: { status: string } }) => {
      if (response.data.status === "success") {
        setBenachrichtigung("Nachricht gesendet.");
        setVorname("");
        setNachname("");
        setEmail("");
        setNachricht("");
      } else if (response.data.status === "fail") {
        setBenachrichtigung("Fehler beim Senden der Nachricht.");
      }
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className=" justify-center border-solid border rounded-md w-[450px] h-[800px] p-4 m-[0 auto]">
          <h2 className=" text-2xl text-center font-bold mb-3">
            Kontaktformular
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="vorname"
              placeholder="Vorname"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
              required
              className="w-full text-2xl border rounded-sm"
              onChange={(e) => setVorname(e?.target?.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="nachname"
              placeholder="Nachname"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
              required
              className="w-full text-2xl border rounded-sm"
              onChange={(e) => setNachname(e?.target?.value)}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="E-Mail-Adresse"
              pattern="[(\w\.?)+@[\w\.-]+\.\w{2,4}]"
              required
              className="w-full text-2xl border rounded-sm"
              onChange={(e) => setEmail(e?.target?.value)}
            />
            <br />
            <br />
            <textarea
              name="nachricht"
              id="nachricht"
              placeholder="Nachricht"
              required
              className="w-full h-96 text-2xl border rounded-sm"
              onChange={(e) => setNachricht(e?.target?.value)}
            ></textarea>
            <br />
            <br />
            {benachrichtigung && (
              <p className=" text-green-500">{benachrichtigung}</p>
            )}
            <br />
            <ReCaptcha
              onValidate={function (token: string): void {
                console.log(token);
              }}
              action={""}
            />
            <br />
            <button
              type="submit"
              className="text-2xl border rounded-sm bg-turquoise-200 p-4 w-full"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
