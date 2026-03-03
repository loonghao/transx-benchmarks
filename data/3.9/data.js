window.BENCHMARK_DATA = {
  "lastUpdate": 1772501333468,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.9)": [
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "513701dab90bb14a1f7d5e5e17f2e3f56191b915",
          "message": "chore(workflows): Update benchmark.yml and add index page generation\n\nUpdate benchmark.yml to improve auto-push logic and add a new workflow step to generate an index page for the benchmarks.\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:34:21+08:00",
          "tree_id": "856183d03a263638286260630f9c521986018bca",
          "url": "https://github.com/loonghao/transx/commit/513701dab90bb14a1f7d5e5e17f2e3f56191b915"
        },
        "date": 1734017764015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2968.766165837011,
            "unit": "iter/sec",
            "range": "stddev: 0.00016974838819639032",
            "extra": "mean: 336.84027105518464 usec\nrounds: 1033"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 68774.13567394683,
            "unit": "iter/sec",
            "range": "stddev: 0.000003693676535594876",
            "extra": "mean: 14.5403499469761 usec\nrounds: 1886"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 67924.51689073439,
            "unit": "iter/sec",
            "range": "stddev: 0.000002022731887953131",
            "extra": "mean: 14.722224695519479 usec\nrounds: 31447"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 67944.10252042682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020649122191559395",
            "extra": "mean: 14.717980853442848 usec\nrounds: 33113"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 935054.2358914415,
            "unit": "iter/sec",
            "range": "stddev: 1.2565164440076077e-7",
            "extra": "mean: 1.069456681351368 usec\nrounds: 3405"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 71466.45396218837,
            "unit": "iter/sec",
            "range": "stddev: 0.000003900019454273003",
            "extra": "mean: 13.992578959200664 usec\nrounds: 35588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 771.6192307834694,
            "unit": "iter/sec",
            "range": "stddev: 0.00003522565853322005",
            "extra": "mean: 1.295975994513048 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2272.053230593845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005571570886733677",
            "extra": "mean: 440.1305332703982 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 60807.37099506997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028636918453156326",
            "extra": "mean: 16.44537469118795 usec\nrounds: 32787"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17826.601196986132,
            "unit": "iter/sec",
            "range": "stddev: 0.000012049027853534359",
            "extra": "mean: 56.09594274028331 usec\nrounds: 12225"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1658.2415182451086,
            "unit": "iter/sec",
            "range": "stddev: 0.00006756312841992779",
            "extra": "mean: 603.0484636871741 usec\nrounds: 1432"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "40a480d4c7ec571c8fccc07ce06394a33a4482db",
          "message": "tests(tests/benchmarks): Add new performance benchmarks for translation operations\n\n- Added benchmarks for translation with nested parameters\n- Added benchmarks for translation with large number of parameters\n- Added benchmarks for frequent locale switches\n- Added benchmarks for memory usage with large number of translations\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:49:00+08:00",
          "tree_id": "2f3177db43da8ad71aea4f0fc23e07eeaeb8b095",
          "url": "https://github.com/loonghao/transx/commit/40a480d4c7ec571c8fccc07ce06394a33a4482db"
        },
        "date": 1734018611016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2995.830892790377,
            "unit": "iter/sec",
            "range": "stddev: 0.00022653073642043805",
            "extra": "mean: 333.79721212120216 usec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 67177.80740914348,
            "unit": "iter/sec",
            "range": "stddev: 0.00004497685745234836",
            "extra": "mean: 14.885868392660448 usec\nrounds: 1854"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 67885.47822902778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016796440141358082",
            "extra": "mean: 14.730690953170612 usec\nrounds: 31348"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 68644.4805278321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021154671043904314",
            "extra": "mean: 14.567813643728387 usec\nrounds: 33334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 977967.8893727766,
            "unit": "iter/sec",
            "range": "stddev: 8.814313249629561e-8",
            "extra": "mean: 1.0225284601535882 usec\nrounds: 3338"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 72661.5906094217,
            "unit": "iter/sec",
            "range": "stddev: 0.000004689041145583386",
            "extra": "mean: 13.762429250624391 usec\nrounds: 35336"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 768.9236217094817,
            "unit": "iter/sec",
            "range": "stddev: 0.00008917503015530225",
            "extra": "mean: 1.3005192866578688 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 677.358948722486,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112240621826623",
            "extra": "mean: 1.4763221212121314 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 51533.55647086026,
            "unit": "iter/sec",
            "range": "stddev: 0.000002054013062618913",
            "extra": "mean: 19.404831889789165 usec\nrounds: 29326"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 895.1761903760761,
            "unit": "iter/sec",
            "range": "stddev: 0.000059909818550551584",
            "extra": "mean: 1.1170985228951251 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1659.447521499951,
            "unit": "iter/sec",
            "range": "stddev: 0.00006148621939804204",
            "extra": "mean: 602.6101983002839 usec\nrounds: 1412"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 73436.29659829414,
            "unit": "iter/sec",
            "range": "stddev: 0.000001934770397295709",
            "extra": "mean: 13.617244418929875 usec\nrounds: 48781"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 59899.01981382817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037373332815811757",
            "extra": "mean: 16.694764006290832 usec\nrounds: 26738"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 33179.033036300956,
            "unit": "iter/sec",
            "range": "stddev: 0.000005889726237056102",
            "extra": "mean: 30.139516088546245 usec\nrounds: 19921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 731.31590386543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004008881528875585",
            "extra": "mean: 1.3673981308411567 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 75.88077854892876,
            "unit": "iter/sec",
            "range": "stddev: 0.0003977297004722368",
            "extra": "mean: 13.178568000000013 msec\nrounds: 75"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "c129133837fd64ccc614941f230af18bfc467074",
          "message": "refactor(core): Add translation and parameter caching for improved performance\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-13T00:21:43+08:00",
          "tree_id": "59f62ae9aedac103ec3c56e3f2d1bb54bb077a89",
          "url": "https://github.com/loonghao/transx/commit/c129133837fd64ccc614941f230af18bfc467074"
        },
        "date": 1734020568503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2968.2221922330373,
            "unit": "iter/sec",
            "range": "stddev: 0.0001866326580863609",
            "extra": "mean: 336.9020023557216 usec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1306827.3092384085,
            "unit": "iter/sec",
            "range": "stddev: 1.1592454666188152e-7",
            "extra": "mean: 765.212046710884 nsec\nrounds: 1627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 483153.17319959775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036839808421161494",
            "extra": "mean: 2.069737001575865 usec\nrounds: 16502"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 439434.6077430831,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032177802015219963",
            "extra": "mean: 2.275651444787101 usec\nrounds: 15504"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 955578.8127214868,
            "unit": "iter/sec",
            "range": "stddev: 5.94581823458624e-8",
            "extra": "mean: 1.0464861575907087 usec\nrounds: 3287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1324214.3548662,
            "unit": "iter/sec",
            "range": "stddev: 1.813325949931189e-7",
            "extra": "mean: 755.1647483092275 nsec\nrounds: 20243"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19512.669951145886,
            "unit": "iter/sec",
            "range": "stddev: 0.000008304636305334908",
            "extra": "mean: 51.24875286179248 usec\nrounds: 8299"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5189.172662430545,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018577082861609",
            "extra": "mean: 192.70894708128912 usec\nrounds: 1833"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1297114.1504617883,
            "unit": "iter/sec",
            "range": "stddev: 2.009300325001968e-7",
            "extra": "mean: 770.942171623051 nsec\nrounds: 18797"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11513.579702868692,
            "unit": "iter/sec",
            "range": "stddev: 0.000018226750905897593",
            "extra": "mean: 86.85396078431131 usec\nrounds: 1275"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1638.6290005745377,
            "unit": "iter/sec",
            "range": "stddev: 0.00008624682883778336",
            "extra": "mean: 610.2662650602296 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1749643.2484971315,
            "unit": "iter/sec",
            "range": "stddev: 6.830411181481488e-8",
            "extra": "mean: 571.5450854675105 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 214868.89244783053,
            "unit": "iter/sec",
            "range": "stddev: 0.000007448170715534183",
            "extra": "mean: 4.654000812345588 usec\nrounds: 14772"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53329.000114501636,
            "unit": "iter/sec",
            "range": "stddev: 0.000007212375473472517",
            "extra": "mean: 18.751523521028332 usec\nrounds: 11224"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11308.666168436348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074410025717183116",
            "extra": "mean: 88.42775842044954 usec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1872.8638970315128,
            "unit": "iter/sec",
            "range": "stddev: 0.000010856564209067329",
            "extra": "mean: 533.9416289592634 usec\nrounds: 221"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "13c0565f3998741304d99a38c46f4a06bb1004e5",
          "message": "bump: version 0.6.0 → 0.6.1",
          "timestamp": "2024-12-12T16:22:08Z",
          "tree_id": "09ee9a0219ba87c70c96c5fc0f17b3cadc5bb0d4",
          "url": "https://github.com/loonghao/transx/commit/13c0565f3998741304d99a38c46f4a06bb1004e5"
        },
        "date": 1734020606272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2926.360164066013,
            "unit": "iter/sec",
            "range": "stddev: 0.00021441917669237894",
            "extra": "mean: 341.72143684820946 usec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1266421.4398293614,
            "unit": "iter/sec",
            "range": "stddev: 6.700004749666447e-8",
            "extra": "mean: 789.6265560181457 nsec\nrounds: 1687"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 480171.13412268856,
            "unit": "iter/sec",
            "range": "stddev: 0.000003287521354922029",
            "extra": "mean: 2.0825908284284536 usec\nrounds: 21414"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 437711.1990449837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031168783268713933",
            "extra": "mean: 2.2846114108614106 usec\nrounds: 17422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 965940.8151872393,
            "unit": "iter/sec",
            "range": "stddev: 1.2611445086400762e-7",
            "extra": "mean: 1.0352601156067296 usec\nrounds: 3287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1260194.846139094,
            "unit": "iter/sec",
            "range": "stddev: 4.2188805605580414e-7",
            "extra": "mean: 793.5280826324099 nsec\nrounds: 18588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20201.23908837844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035246559408003806",
            "extra": "mean: 49.50191399770569 usec\nrounds: 7837"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5280.531225682635,
            "unit": "iter/sec",
            "range": "stddev: 0.00003806007895626806",
            "extra": "mean: 189.37488621151488 usec\nrounds: 3735"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1246956.0380686084,
            "unit": "iter/sec",
            "range": "stddev: 6.542375916272812e-8",
            "extra": "mean: 801.9528912574056 nsec\nrounds: 18383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11511.221505558817,
            "unit": "iter/sec",
            "range": "stddev: 0.00001611002731854824",
            "extra": "mean: 86.87175375064201 usec\nrounds: 1933"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1599.3011851126148,
            "unit": "iter/sec",
            "range": "stddev: 0.00008385866162931889",
            "extra": "mean: 625.2730938416612 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1718908.6875893977,
            "unit": "iter/sec",
            "range": "stddev: 8.07098249634168e-8",
            "extra": "mean: 581.7644690610836 nsec\nrounds: 81968"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 214723.97274865964,
            "unit": "iter/sec",
            "range": "stddev: 0.00000804826999764012",
            "extra": "mean: 4.657141851462145 usec\nrounds: 14205"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53314.91116774044,
            "unit": "iter/sec",
            "range": "stddev: 0.000005780050335249934",
            "extra": "mean: 18.756478780463123 usec\nrounds: 10627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11737.454664590156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067032052498467385",
            "extra": "mean: 85.19734717415564 usec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1873.2846632771277,
            "unit": "iter/sec",
            "range": "stddev: 0.00004587305583975843",
            "extra": "mean: 533.8216981131945 usec\nrounds: 212"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "5c332e1d5ae462437c64289535606d7a687943e3",
          "message": "feat: improve custom keyword extraction and gettext output stability",
          "timestamp": "2026-03-03T09:26:42+08:00",
          "tree_id": "00f4037f0df04d43e7da3ba37dcc021ce83ecdce",
          "url": "https://github.com/loonghao/transx/commit/5c332e1d5ae462437c64289535606d7a687943e3"
        },
        "date": 1772501302689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3264.6427704294565,
            "unit": "iter/sec",
            "range": "stddev: 0.00018206980699678223",
            "extra": "mean: 306.31222780569414 usec\nrounds: 1194"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1374659.0992844792,
            "unit": "iter/sec",
            "range": "stddev: 3.2421447008080957e-7",
            "extra": "mean: 727.4530831102111 nsec\nrounds: 1865"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 492206.6449394811,
            "unit": "iter/sec",
            "range": "stddev: 0.000003850961597684723",
            "extra": "mean: 2.0316670046641776 usec\nrounds: 19724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 437034.38285165996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038331042944560225",
            "extra": "mean: 2.288149489463451 usec\nrounds: 19881"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1056826.2621526357,
            "unit": "iter/sec",
            "range": "stddev: 4.3988819272594123e-7",
            "extra": "mean: 946.2293243575468 nsec\nrounds: 3567"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1414138.143197166,
            "unit": "iter/sec",
            "range": "stddev: 3.8476443254266685e-7",
            "extra": "mean: 707.1444927856494 nsec\nrounds: 21835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20250.4874844616,
            "unit": "iter/sec",
            "range": "stddev: 0.000007059521726167464",
            "extra": "mean: 49.381527272729116 usec\nrounds: 9625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5364.730048702293,
            "unit": "iter/sec",
            "range": "stddev: 0.00003593980892916865",
            "extra": "mean: 186.4026690852592 usec\nrounds: 3859"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1407051.4376322185,
            "unit": "iter/sec",
            "range": "stddev: 2.961317444773888e-7",
            "extra": "mean: 710.7060717572605 nsec\nrounds: 17392"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11856.715561746814,
            "unit": "iter/sec",
            "range": "stddev: 0.000018108297813555182",
            "extra": "mean: 84.3403887689006 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1803.6138957734238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000700052235989445",
            "extra": "mean: 554.4423905489933 usec\nrounds: 1439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1672362.688415696,
            "unit": "iter/sec",
            "range": "stddev: 1.1751611197016555e-7",
            "extra": "mean: 597.9564163486438 nsec\nrounds: 83334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 209127.8613704798,
            "unit": "iter/sec",
            "range": "stddev: 0.000008300834685260147",
            "extra": "mean: 4.781763622726735 usec\nrounds: 14663"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54234.261324745275,
            "unit": "iter/sec",
            "range": "stddev: 0.000004880938113749298",
            "extra": "mean: 18.43852899576109 usec\nrounds: 10605"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 12166.35881516715,
            "unit": "iter/sec",
            "range": "stddev: 0.000006989974500519808",
            "extra": "mean: 82.19386056190892 usec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1873.6610300031302,
            "unit": "iter/sec",
            "range": "stddev: 0.000013454670781854478",
            "extra": "mean: 533.7144680851527 usec\nrounds: 235"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "b34e1d3a8548ad61d289ccfd214dca1afb825792",
          "message": "bump: version 0.6.1 → 0.7.0",
          "timestamp": "2026-03-03T01:27:23Z",
          "tree_id": "ae710064456900b164f8e955ce29140683edb0a4",
          "url": "https://github.com/loonghao/transx/commit/b34e1d3a8548ad61d289ccfd214dca1afb825792"
        },
        "date": 1772501330203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2535.8412530655046,
            "unit": "iter/sec",
            "range": "stddev: 0.0002790083770705328",
            "extra": "mean: 394.34645161290325 usec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1340206.185566341,
            "unit": "iter/sec",
            "range": "stddev: 1.7363051399949282e-7",
            "extra": "mean: 746.1538461542187 nsec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 489246.5346374971,
            "unit": "iter/sec",
            "range": "stddev: 0.000004205872544975563",
            "extra": "mean: 2.0439592908735493 usec\nrounds: 21322"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 443650.06571902655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032176893472592278",
            "extra": "mean: 2.254028743079962 usec\nrounds: 16978"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 978164.7952305636,
            "unit": "iter/sec",
            "range": "stddev: 8.89600874420078e-7",
            "extra": "mean: 1.0223226238317948 usec\nrounds: 2988"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1330259.3894123733,
            "unit": "iter/sec",
            "range": "stddev: 9.9877810129508e-7",
            "extra": "mean: 751.7330890193817 nsec\nrounds: 19647"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20342.43433819021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047388473896563854",
            "extra": "mean: 49.15832507433159 usec\nrounds: 8072"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5268.6534852652,
            "unit": "iter/sec",
            "range": "stddev: 0.00003669423402947823",
            "extra": "mean: 189.80181611804454 usec\nrounds: 1762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1355064.4757969363,
            "unit": "iter/sec",
            "range": "stddev: 3.9698703432973886e-7",
            "extra": "mean: 737.9722646864335 nsec\nrounds: 18316"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11381.526724672749,
            "unit": "iter/sec",
            "range": "stddev: 0.000017621892955123858",
            "extra": "mean: 87.86167481663166 usec\nrounds: 1636"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1419.7392336755788,
            "unit": "iter/sec",
            "range": "stddev: 0.00007363341027237413",
            "extra": "mean: 704.3546985815759 usec\nrounds: 1128"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1750397.8642406163,
            "unit": "iter/sec",
            "range": "stddev: 1.5817268133263802e-7",
            "extra": "mean: 571.2986861040971 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 210887.32030017473,
            "unit": "iter/sec",
            "range": "stddev: 0.000007477314408198276",
            "extra": "mean: 4.741868778912885 usec\nrounds: 14266"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53027.87600571916,
            "unit": "iter/sec",
            "range": "stddev: 0.000004976304483256836",
            "extra": "mean: 18.858005926772325 usec\nrounds: 10461"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11542.369803122318,
            "unit": "iter/sec",
            "range": "stddev: 0.00000855165515181372",
            "extra": "mean: 86.63732119633619 usec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1873.1257851880905,
            "unit": "iter/sec",
            "range": "stddev: 0.000046567455621515895",
            "extra": "mean: 533.8669767442152 usec\nrounds: 215"
          }
        ]
      }
    ]
  }
}