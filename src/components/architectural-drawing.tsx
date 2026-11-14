export default function ArchitecturalDrawing({
  kind,
}: {
  kind:
    | "home"
    | "joinery"
    | "office"
    | "hospitality"
    | "retail"
    | "design"
    | "delivery";
}) {
  return (
    <svg
      className={`architectural-drawing drawing-${kind}`}
      viewBox="0 0 600 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`grid-${kind}`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0H0V24"
            stroke="currentColor"
            strokeWidth=".4"
            opacity=".15"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="600" height="420" fill={`url(#grid-${kind})`} />
      <g stroke="currentColor" strokeWidth="1.5">
        {kind === "home" && (
          <>
            <path d="M90 70H510V350H90V70Z M98 78H502V342H98Z M300 78V180M300 238V342M98 210H222M272 210H300M400 78V165H502" />
            <path
              d="M300 238a58 58 0 0 1 58-58h-58M222 210v50a50 50 0 0 0 50-50"
              strokeWidth=".8"
            />
            <rect x="130" y="115" width="130" height="55" rx="3" />
            <path d="M145 115v55M245 115v55M130 157H260" />
            <rect x="150" y="260" width="85" height="40" rx="15" />
            <circle cx="405" cy="260" r="45" />
            <path d="M358 215h94v90h-94zM420 90h70v55h-70zM98 310h0M130 70h120M350 350h100" />
            <path
              d="M70 70v280M62 70h16M62 350h16M90 375H510M90 368v14M510 368v14"
              opacity=".45"
            />
            <circle cx="470" cy="190" r="14" />
            <path d="m460 183 19 14m-14-20 2 26" />
          </>
        )}
        {kind === "joinery" && (
          <>
            <path d="M100 80H500V330H100ZM100 300H500M240 80V300M360 80V300M100 160H240M100 230H240M360 140H500M360 220H500M100 330v12m400-12v12" />
            <path
              d="M252 92H348V288H252ZM370 92H490V128H370ZM115 172H225V218H115Z"
              opacity=".45"
            />
            <path d="M285 180v30M315 180v30M155 245h30M155 175h30M400 235h55M100 55H500M100 48v14M500 48v14M530 80v250M523 80h14M523 330h14" />
            <path d="M270 110v55m8-45v65m52 40v45m-8-24v42" opacity=".35" />
            <circle
              cx="460"
              cy="275"
              r="70"
              strokeDasharray="4 5"
              opacity=".5"
            />
            <path d="M440 260h40v30h-40zM450 260v30M460 275h20" />
          </>
        )}
        {kind === "office" && (
          <>
            <path d="M80 70H520V350H80ZM250 70V180H80M380 70V180H520M80 260h130v90M390 260h130" />
            <rect x="105" y="100" width="120" height="40" rx="15" />
            <path d="M120 90v10m30-10v10m30-10v10m30-10v10m-90 40v10m30-10v10m30-10v10m30-10v10" />
            {[270, 335].map((x) => (
              <g key={x}>
                <path d={`M${x} 215h45v75h-45zM${x} 252h45`} />
                <circle cx={x + 22} cy="203" r="7" />
                <circle cx={x + 22} cy="302" r="7" />
              </g>
            ))}
            <rect x="403" y="90" width="95" height="65" rx="4" />
            <path d="M415 105h70M415 140h70M100 285h85v40h-85z" />
            <circle cx="450" cy="300" r="25" />
            <path
              d="M245 340V195M245 195l-6 12m6-12 6 12"
              strokeDasharray="4 5"
            />
          </>
        )}
        {kind === "hospitality" && (
          <>
            <path d="M85 70H515V350H85V245M85 195V70M350 70V150H515M385 250H515V330H385Z" />
            <path d="M105 90h220v38H105ZM105 310h245v20H105Z" />
            {[170, 285].map((x) => (
              <g key={x}>
                <circle cx={x} cy="210" r="32" />
                <path
                  d={`M${x - 20} 166h40M${x - 20} 254h40M${x - 44} 190v40M${x + 44} 190v40`}
                />
              </g>
            ))}
            <path
              d="M70 220H115Q120 280 225 280H360V185H470"
              strokeDasharray="5 6"
            />
            <path d="m458 179 12 6-12 6M400 270h90M400 285h90M400 300h90" />
            <circle cx="467" cy="110" r="15" />
          </>
        )}
        {kind === "retail" && (
          <>
            <path d="M80 350V70H520V350H360M240 350H80M400 70V165H520" />
            <path d="M240 350H360" strokeDasharray="10 4" />
            <path d="M246 344H354" opacity=".45" />
            <rect x="92" y="92" width="24" height="210" />
            <path d="M92 127h24M92 162h24M92 197h24M92 232h24M92 267h24" />
            <rect x="140" y="82" width="235" height="20" />
            <path d="M180 82v20M220 82v20M260 82v20M300 82v20M340 82v20" />
            <rect x="185" y="185" width="70" height="44" />
            <path d="M193 193h54v28h-54z" opacity=".45" />
            <circle cx="320" cy="207" r="30" />
            <circle cx="320" cy="207" r="18" opacity=".45" />
            <path d="M410 235h95v70h-32v-38h-63Z" />
            <path d="M425 250h30" opacity=".45" />
            <path d="M400 135a30 30 0 0 1 30 30" strokeWidth=".8" />
            <path d="M425 95h70M425 115h70M425 135h40" opacity=".45" />
            <path
              d="M300 392V315Q300 275 262 275H160Q140 275 140 250V150Q140 125 165 125H372Q392 125 392 150V285"
              strokeDasharray="5 6"
            />
            <path d="m386 273 6 12 6-12" />
            <path
              d="M80 375H520M80 368v14M520 368v14M545 70v280M538 70h14M538 350h14"
              opacity=".45"
            />
          </>
        )}
        {kind === "design" && (
          <>
            <path d="M70 75H370V335H70Z" />
            <path d="M70 200H190M240 200H370M220 75V160M220 215V335M290 200V335" />
            <path
              d="M220 160a40 40 0 0 1 40 40h-40M190 200a50 50 0 0 0 50 0"
              strokeWidth=".8"
            />
            <rect x="95" y="100" width="95" height="65" rx="3" />
            <path d="M95 140h95" opacity=".45" />
            <circle cx="295" cy="270" r="32" opacity=".7" />
            <path d="M235 75v-20M370 75v-20M235 62H370" opacity=".45" />
            <path
              d="M255 115H530V375H255Z"
              strokeDasharray="3 4"
              opacity=".55"
            />
            <path d="M285 345V185H500V345M285 185l107-62 108 62" />
            <path d="M330 345V250h50v95M420 220h50v45h-50z" opacity=".6" />
            <path d="M285 300h215" opacity=".35" />
            <circle cx="470" cy="95" r="26" />
            <circle cx="515" cy="128" r="20" />
            <circle cx="455" cy="145" r="15" />
            <path d="M458 85l24 20M505 120l20 16" opacity=".45" />
            <path d="M95 380L285 312l14 9-188 72Z M285 312l22 4-8 5" />
          </>
        )}
        {kind === "delivery" && (
          <>
            <circle cx="300" cy="210" r="62" />
            <circle
              cx="300"
              cy="210"
              r="125"
              strokeDasharray="4 6"
              opacity=".45"
            />
            <path d="M300 148V78M362 210h100M300 272v70M238 210H138M255 165l-65-65M345 255l65 65" />
            {[
              [300, 60],
              [480, 210],
              [300, 360],
              [120, 210],
              [178, 88],
              [422, 332],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="25" />
                <path d={`M${x - 8} ${y}l6 6 11-12`} />
              </g>
            ))}
            <path d="M273 195h54v35h-54zM280 185h40v10M300 195v35" />
          </>
        )}
      </g>
      <g fill="currentColor" opacity=".6">
        <circle cx="30" cy="390" r="2" />
        <path d="M30 363v18h-3l3-8 3 8h-3" />
        <text x="25" y="357" fontSize="9" fontFamily="Arial">
          N
        </text>
        <text x="450" y="400" fontSize="9" letterSpacing="2" fontFamily="Arial">
          HALO / STUDIES
        </text>
      </g>
    </svg>
  );
}
