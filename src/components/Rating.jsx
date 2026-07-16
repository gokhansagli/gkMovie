import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function Rating({ vote_average }) {
  function calculateRating(vote_average) {
    const calculate = vote_average / 2;
    let filledCount = Math.trunc(calculate);
    let emptyCount = 5 - filledCount;
    const decimalPart = calculate - filledCount;
    const stars = {
      filledStars: [],
      halfStars: false,
      emptyStars: [],
    };

    if (decimalPart < 0.35) {
      stars.halfStars = false;
    } else if (decimalPart >= 0.35 && decimalPart < 0.75) {
      stars.halfStars = true;
      emptyCount -= 1;
    } else {
      stars.halfStars = false;
      filledCount += 1;
      emptyCount -= 1;
    }

    for (let sayi = 1; sayi <= filledCount; sayi++) {
      stars.filledStars.push("dolu");
    }

    for (let sayi = 1; sayi <= emptyCount; sayi++) {
      stars.emptyStars.push("bos");
    }

    return stars;
  }
  const deger = calculateRating(vote_average);

  return (
    <>
      <div>
        <div className="flex">
          <span className="text-amber-500 flex items-center gap-1">
            {deger.filledStars.map((index, indis) => {
              return <FaStar key={indis} />;
            })}
            {deger.halfStars && <FaStarHalfAlt />}
            {deger.emptyStars.map((index, indis) => {
              return <FaRegStar key={indis} />;
            })}
          </span>
          <span className="text-slate-200 ml-2">
            {`${vote_average.toFixed(1)}/10`}
          </span>
        </div>
      </div>
    </>
  );
}

export default Rating;
