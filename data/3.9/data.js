window.BENCHMARK_DATA = {
  "lastUpdate": 1734017772008,
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
      }
    ]
  }
}