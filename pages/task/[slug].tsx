import React from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import TaskCard from "@/components/Task/TaskCard";

export default function Task() {
  const router = useRouter();

  console.log(router);

  const renderAllTasks = () => {
    if (router.query.slug === "all") {
      return (
        <>
          <Grid>
            <TaskCard />
          </Grid>
          <Grid>
            <TaskCard />
          </Grid>
          <Grid>
            <TaskCard />
          </Grid>
          <Grid>
            <TaskCard />
          </Grid>
          <Grid>
            <TaskCard />
          </Grid>
          <Grid>
            <TaskCard />
          </Grid>
        </>
      );
    }
  };

  return (
    <Grid container spacing={2}>
      {renderAllTasks()}
    </Grid>
  );
}
