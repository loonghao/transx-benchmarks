window.BENCHMARK_DATA = {
  "lastUpdate": 1734018628735,
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
      }
    ]
  }
}