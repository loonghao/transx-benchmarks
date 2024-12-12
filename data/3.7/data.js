window.BENCHMARK_DATA = {
  "lastUpdate": 1734017780455,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.7)": [
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
        "date": 1734017769023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2813.86183504751,
            "unit": "iter/sec",
            "range": "stddev: 0.00016283322391281895",
            "extra": "mean: 355.383476027392 usec\nrounds: 1168"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 63244.22775369646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017577066235028565",
            "extra": "mean: 15.81171967020425 usec\nrounds: 1698"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 57650.58508741278,
            "unit": "iter/sec",
            "range": "stddev: 0.000011037195555420493",
            "extra": "mean: 17.34587773018693 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 59430.115494157784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021334595823500822",
            "extra": "mean: 16.826485893306128 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 850288.6609502076,
            "unit": "iter/sec",
            "range": "stddev: 2.1132053727915165e-7",
            "extra": "mean: 1.176071193143383 usec\nrounds: 3034"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 62299.98024343407,
            "unit": "iter/sec",
            "range": "stddev: 0.000005324761956898205",
            "extra": "mean: 16.051369456178794 usec\nrounds: 30304"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 626.4380224500592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000665149489440178",
            "extra": "mean: 1.5963271132376418 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 1913.0008855714661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000539112012407971",
            "extra": "mean: 522.7389111747706 usec\nrounds: 1745"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 51329.961628416924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033371809999866716",
            "extra": "mean: 19.481799095021866 usec\nrounds: 27625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 15128.262813839165,
            "unit": "iter/sec",
            "range": "stddev: 0.000011364211811090175",
            "extra": "mean: 66.1014428626406 usec\nrounds: 10396"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1511.5226868029013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000646474009954505",
            "extra": "mean: 661.5845125786044 usec\nrounds: 1272"
          }
        ]
      }
    ]
  }
}