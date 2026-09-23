import { useState } from "react";
import { busRoutes } from "../data/busRoutes";

// Every unique stop across all routes, for the dropdowns.
const locations = Array.from(
  new Set(busRoutes.flatMap((route) => route.stops))
).sort();

/**
 * Finds a route that passes through both `from` and `to`, in that
 * travel direction, and returns the slice of stops between them.
 * Handles routes that are only defined start -> end (not reversed).
 */
const findLeg = (from, to) => {
  for (const route of busRoutes) {
    const fromIndex = route.stops.indexOf(from);
    const toIndex = route.stops.indexOf(to);

    if (fromIndex === -1 || toIndex === -1) continue;

    const forward = fromIndex < toIndex;
    const start = forward ? fromIndex : toIndex;
    const end = forward ? toIndex : fromIndex;

    const stopsBetween = route.stops.slice(start, end + 1);
    const legStops = forward ? stopsBetween : [...stopsBetween].reverse();

    // stopKm: optional per-route array of cumulative KM from route.stops[0].
    // Add real measured values here to get an actual fare instead of "N/A".
    let distanceKm = null;
    if (Array.isArray(route.stopKm) && route.stopKm.length === route.stops.length) {
      distanceKm = Math.abs(route.stopKm[toIndex] - route.stopKm[fromIndex]);
    }

    return { route, legStops, distanceKm };
  }
  return null;
};

const FareCalculator = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleCalculate = () => {
    const leg = findLeg(from, to);
    setResult(leg);
    setNotFound(!leg);
  };

  const rate = result?.route?.fareRate ?? 2.62;
  const fare =
    result?.distanceKm != null ? result.distanceKm * rate : null;

  return (
    <section className="bg-ink px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 font-bangla text-sm font-medium text-amber">
            🚌 সহজে বাস ভাড়া হিসাব করুন
          </p>

          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Bus Fare Calculator
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-bangla text-sm leading-7 text-sage">
            আপনার যাত্রার শুরু এবং গন্তব্য নির্বাচন করুন।
          </p>
        </div>

        {/* Calculator Card */}
        <div className="rounded-3xl border border-paper/10 bg-surface p-5 shadow-2xl sm:p-8">

          {/* From */}
          <div>
            <label htmlFor="from" className="mb-2 block font-bangla text-sm font-medium text-paper">
              যাত্রা শুরু
            </label>

            <select
              id="from"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
                setResult(null);
                setNotFound(false);
              }}
              className="w-full rounded-xl border border-paper/10 bg-ink px-4 py-3 text-paper outline-none focus:border-amber/60"
            >
              <option value="">স্থান নির্বাচন করুন</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* To */}
          <div className="mt-5">
            <label htmlFor="to" className="mb-2 block font-bangla text-sm font-medium text-paper">
              গন্তব্য
            </label>

            <select
              id="to"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
                setResult(null);
                setNotFound(false);
              }}
              className="w-full rounded-xl border border-paper/10 bg-ink px-4 py-3 text-paper outline-none focus:border-amber/60"
            >
              <option value="">গন্তব্য নির্বাচন করুন</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Calculate Button */}
          <button
            type="button"
            onClick={handleCalculate}
            disabled={!from || !to || from === to}
            className="mt-6 w-full rounded-xl bg-amber px-5 py-3 font-semibold text-ink transition hover:bg-amber-soft disabled:cursor-not-allowed disabled:opacity-40"
          >
            ভাড়া হিসাব করুন
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 space-y-5">

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-paper/10 bg-ink p-5">
                  <p className="font-bangla text-sm text-sage">দূরত্ব</p>
                  <p className="mt-2 text-2xl font-bold text-paper">
                    {result.distanceKm != null ? `${result.distanceKm} KM` : "যুক্ত করা হয়নি"}
                  </p>
                </div>

                <div className="rounded-2xl border border-amber/20 bg-amber/5 p-5">
                  <p className="font-bangla text-sm text-sage">মোট ভাড়া</p>
                  <p className="mt-2 text-2xl font-bold text-amber">
                    {fare != null ? `৳${fare.toFixed(2)}` : "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-paper/10 bg-ink px-4 py-4">
                <span className="font-bangla text-sm text-sage">প্রতি কিলোমিটার</span>
                <span className="font-semibold text-amber">৳{rate.toFixed(2)} / KM</span>
              </div>

              {result.distanceKm == null && (
                <div className="rounded-xl border border-amber/20 bg-amber/5 p-4 text-center">
                  <p className="font-bangla text-sm text-sage">
                    এই রুটের জন্য দূরত্বের তথ্য এখনো যুক্ত করা হয়নি, তাই সঠিক ভাড়া দেখানো যাচ্ছে না।
                  </p>
                </div>
              )}

              {/* Route */}
              <div className="rounded-2xl border border-paper/10 bg-ink p-5">
                <h3 className="font-bangla font-semibold text-paper">🛣️ যাত্রার রুট</h3>
                <p className="mt-1 text-xs text-sage/70">{result.route.busName}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {result.legStops.map((location, index) => (
                    <div key={`${location}-${index}`} className="flex items-center gap-2">
                      <span
                        className={`rounded-lg px-3 py-2 text-xs font-medium ${
                          index === 0 || index === result.legStops.length - 1
                            ? "bg-amber/10 text-amber"
                            : "bg-paper/5 text-sage"
                        }`}
                      >
                        {location}
                      </span>
                      {index < result.legStops.length - 1 && (
                        <span className="text-sage/40">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {fare != null && (
                <div className="rounded-2xl bg-gradient-to-br from-amber/10 to-teal/10 p-6 text-center">
                  <p className="text-sm text-sage">
                    {result.distanceKm} KM × ৳{rate.toFixed(2)}
                  </p>
                  <p className="mt-2 text-4xl font-bold text-amber">৳{fare.toFixed(2)}</p>
                  <p className="mt-2 font-bangla text-xs text-sage">আনুমানিক বাস ভাড়া</p>
                </div>
              )}
            </div>
          )}

          {/* No Route */}
          {notFound && (
            <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-center">
              <p className="font-bangla text-sm text-red-300">
                এই দুটি স্থানের জন্য এখনো কোনো রুটের তথ্য পাওয়া যায়নি।
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default FareCalculator;